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
import AddProductDialogStyles from "./AddProductDialogStyles";
import { Product } from "../../../types/models/Product.model";
import ProductService from "../../../services/ProductService";
import { useState, useEffect } from "react";

interface AddProductDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setProductList: (productList: Product[]) => void;
}

export default function AddProductDialog(props: AddProductDialogProps) {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string>();
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>();

  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productAmount, setProductAmount] = useState<string>("");

  const handleImageUpload = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedImage) {
      setImagePreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImage);
    setImagePreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedImage]);

  const clearCache = () => {
    setProductAmount("");
    setProductName("");
    setProductPrice("");
    setImagePreview(undefined);
    setSelectedImage(undefined);
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={() => {
        props.setIsOpen(false);
        clearCache();
      }}
    >
      <DialogTitle>Add new product</DialogTitle>
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
                      ...AddProductDialogStyles.productImage,
                      color: "#DCDDE1",
                    }}
                  />
                </IconButton>
              </label>
            </>
          )}
          {selectedImage && imagePreview && (
            <Box sx={{ ...AddProductDialogStyles.productImagePreviewSection }}>
              <img
                style={{
                  maxHeight: "150px",
                  margin: "1rem",
                  display: isImageLoaded ? "block" : "none",
                }}
                alt="Product image preview"
                src={`${imagePreview}`}
                onLoad={() => setIsImageLoaded(true)}
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
              name: productName,
              price: Number(productPrice),
              amount: Number(productAmount),
            };

            ProductService.saveProduct(product, imagePreview).then(() => {
              props.setIsOpen(false);
              clearCache();
              ProductService.getAllProducts().then(props.setProductList);
            });
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
                clearCache();
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
