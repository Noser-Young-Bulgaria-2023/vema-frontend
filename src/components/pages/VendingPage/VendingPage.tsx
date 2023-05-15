import { useLayoutEffect, useState, useEffect } from "react";
import { Product } from "../../../types/models/Product.model";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VendingPageStyles from "./VendingPageStyles";
import ProductService from "../../../services/ProductService";

const VendingPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [openProduct, setOpenProduct] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>();

  const [productId, setProductId] = useState<string>();
  const [productName, setProductName] = useState<string>();
  const [productPrice, setProductPrice] = useState<string>();
  const [productAmount, setProductAmount] = useState<number>();
  const [selectedImage, setSelectedImage] = useState<Blob>();

  useLayoutEffect(() => {
    ProductService.getAllProducts().then(setProductList);
  }, []);

  useEffect(() => {
    if (!selectedImage) {
      setImagePreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImage);
    setImagePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const handleNewProduct = (product: Product | undefined) => {
    setOpenProduct(true);

    setProductId(undefined);
    setProductName(undefined);
    setProductPrice(undefined);
    setProductAmount(undefined);
    setImagePreview(undefined);

    if (!product) return;
    setProductId(product.id);
    setProductName(product.name);
    setProductPrice(product.price);
    setProductAmount(product.amount);
    setImagePreview(product.image.data);
  };

  const handleImageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  return (
    <Box sx={VendingPageStyles.page}>
      <Typography variant="h1">VEMA</Typography>
      <ProductSelectionBox
        productList={productList}
        openProduct={handleNewProduct}
      />
      <Dialog
        open={openProduct}
        onClose={() => {
          setOpenProduct(false);
          setSelectedImage(undefined);
        }}
        sx={{
          ...VendingPageStyles.productDialog,
        }}
      >
        <DialogContent>
          <Box textAlign="center">
            {!selectedImage && !imagePreview && (
              <>
                <input
                  accept="image/*"
                  hidden
                  id="productImage"
                  type="file"
                  onChange={handleImageChange}
                />
                <label htmlFor="productImage">
                  <IconButton component="span">
                    <AddPhotoAlternateIcon
                      sx={{
                        ...VendingPageStyles.productImage,
                        color: "#DCDDE1",
                      }}
                    />
                  </IconButton>
                </label>
              </>
            )}
            {selectedImage && imagePreview && (
              <Box sx={{ ...VendingPageStyles.productImagePreviewSection }}>
                <img
                  style={{ maxHeight: "150px", margin: "1rem" }}
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
            {imagePreview && !selectedImage && (
              <Box sx={{ ...VendingPageStyles.productImagePreviewSection }}>
                <img
                  style={{ maxHeight: "150px", margin: "1rem" }}
                  alt="Product image preview"
                  src={`data:image/png;base64,${imagePreview}`}
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

          <form onSubmit={(event) => event.preventDefault()}>
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
              />
              <TextField
                margin="dense"
                id="productAmount"
                label="Product Amount"
                type="text"
                fullWidth
                variant="standard"
                onChange={(event) => {
                  setProductAmount(Number(event.target.value));
                }}
                value={productAmount}
              />
            </Box>
            <DialogActions>
              <Button
                onClick={() => {
                  setOpenProduct(false);
                  setSelectedImage(undefined);
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  const product: Product = {
                    id: productId,
                    name: productName,
                    price: productPrice,
                    amount: productAmount,
                    imageBlob: selectedImage,
                    image: undefined,
                  };

                  if (product.id) {
                    ProductService.updateProduct(product.id, product).then(
                      () => {
                        setOpenProduct(false);
                        ProductService.getAllProducts().then(setProductList);
                      }
                    );
                  } else {
                    ProductService.saveProduct(product).then(() => {
                      setOpenProduct(false);
                      ProductService.getAllProducts().then(setProductList);
                    });
                  }
                }}
              >
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default VendingPage;
