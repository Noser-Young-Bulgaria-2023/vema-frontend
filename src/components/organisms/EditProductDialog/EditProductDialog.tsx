import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EditProductDialogStyles from "./EditProductDialogStyles";
import { Product } from "../../../types/models/Product.model";
import ProductService from "../../../services/ProductService";
import { useState, useEffect } from "react";

interface EditProductDialogProps {
  activeProduct?: Product;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setProductList: (productList: Product[]) => void;
}

export default function EditProductDialog(props: EditProductDialogProps) {
  const [selectedImage, setSelectedImage] = useState<Blob>();
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    props.activeProduct
      ? `data:image/png;base64, ${props.activeProduct.image?.data}`
      : undefined
  );

  const [productName, setProductName] = useState<string>(
    props.activeProduct ? String(props.activeProduct.name) : ""
  );
  const [productPrice, setProductPrice] = useState<string>(
    props.activeProduct ? String(props.activeProduct.price) : ""
  );
  const [productAmount, setProductAmount] = useState<string>(
    props.activeProduct ? String(props.activeProduct.amount) : ""
  );

  const handleImageUpload = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedImage) return;
    const objectUrl = URL.createObjectURL(selectedImage);
    setImagePreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedImage]);

  return (
    <Dialog
      open={props.isOpen}
      onClose={() => {
        props.setIsOpen(false);
      }}
    >
      <DialogTitle>{"Edit " + props.activeProduct?.name}</DialogTitle>
      <DialogContent>
        <Box textAlign="center">
          {!selectedImage && !imagePreview && (
            <>
              <input
                accept="image/*"
                hidden
                id="productImage"
                type="file"
                onChange={handleImageUpload}
                required
              />
              <label htmlFor="productImage">
                <IconButton component="span">
                  <AddPhotoAlternateIcon
                    sx={{
                      ...EditProductDialogStyles.productImage,
                      color: "#DCDDE1",
                    }}
                  />
                </IconButton>
              </label>
            </>
          )}
          {imagePreview && (
            <Box sx={{ ...EditProductDialogStyles.productImagePreviewSection }}>
              <img
                style={{
                  maxHeight: "150px",
                  margin: "1rem",
                }}
                alt="Product image preview"
                src={`${imagePreview}`}
              />
              <Button
                onClick={() => {
                  setSelectedImage(undefined);
                  setImagePreview(undefined);
                }}
              >
                Clear
              </Button>
            </Box>
          )}
        </Box>

        <form
          onSubmit={(event) => {
            event.preventDefault();

            if (!imagePreview) return;
            const product: Product = {
              id: props.activeProduct?.id,
              name: productName,
              price: Number(productPrice),
              amount: Number(productAmount),
            };

            if (product.id) {
              ProductService.updateProduct(
                product.id,
                product,
                imagePreview
              ).then(() => {
                props.setIsOpen(false);
                ProductService.getAllProducts().then(props.setProductList);
              });
            }
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            id="productName"
            label="Product Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setProductName(event.target.value);
            }}
            value={productName}
            required
          />
          <Box style={{ display: "flex", gap: "10px" }}>
            <TextField
              margin="dense"
              id="productPrice"
              label="Product Price"
              type="text"
              fullWidth
              variant="standard"
              onChange={(event) => {
                setProductPrice(event.target.value);
              }}
              value={productPrice}
              required
            />
            <TextField
              margin="dense"
              id="productAmount"
              label="Product Amount"
              type="text"
              fullWidth
              variant="standard"
              onChange={(event) => {
                setProductAmount(event.target.value);
              }}
              value={productAmount}
              required
            />
          </Box>
          <DialogActions>
            <Button
              onClick={() => {
                props.setIsOpen(false);
              }}
              type="button"
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
