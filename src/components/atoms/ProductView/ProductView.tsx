import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Product } from "../../../types/models/Product.model";
import ProductViewStyles from "./ProductViewStyles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductService from "../../../services/ProductService";
import { useMemo, useState } from "react";

type ProductViewProps = {
  product: Product;
  openProduct: (product: Product | undefined) => void;
  setProductList: (productList: Product[]) => void;
  buyProduct: (product: Product) => void;
};

const ProductView = ({
  product,
  openProduct,
  setProductList,
  buyProduct,
}: ProductViewProps) => {
  const [isProductEmpty, setProductEmpty] = useState(product.amount === 0);

  useMemo(() => {
    setProductEmpty(product.amount === 0);
  }, [product.amount]);

  return (
    <Grid item>
      <Paper
        sx={{
          ...ProductViewStyles.paper,
          ...ProductViewStyles.paperOnHover,
          opacity: isProductEmpty ? 0.3 : 1,
          zIndex: isProductEmpty ? 0 : 10,
          position: isProductEmpty ? "relative" : undefined,
        }}
        variant="outlined"
        square
        onClick={() => {
          buyProduct(product);
        }}
      >
        <Box
          className="backgroundGradient"
          sx={ProductViewStyles.backgroundGradient}
        ></Box>
        {product && (
          <Box sx={ProductViewStyles.content}>
            <Box sx={ProductViewStyles.editProductBox}>
              <IconButton
                onClick={() => openProduct(product)}
                sx={{
                  ...ProductViewStyles.overlay,
                  ...ProductViewStyles.editButton,
                }}
                className="overlay"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  if (!product.id) return;
                  ProductService.deleteProduct(product.id).then(() => {
                    ProductService.getAllProducts().then(setProductList);
                  });
                }}
                sx={{
                  ...ProductViewStyles.overlay,
                  ...ProductViewStyles.deleteButton,
                }}
                className="overlay"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
            <Box
              className="productImage"
              sx={{ ...ProductViewStyles.productImageContainer }}
            >
              <img
                src={`data:image/png;base64,${product.image?.data}`}
                alt={product.name}
                style={ProductViewStyles.productImage}
              />
            </Box>
            <Typography
              sx={{
                ...ProductViewStyles.hoverText,
                ...ProductViewStyles.overlay,
              }}
              className="overlay"
            >
              {product.name}
            </Typography>
            <Typography
              sx={{
                ...ProductViewStyles.hoverText,
                ...ProductViewStyles.hoverPrice,
                ...ProductViewStyles.overlay,
              }}
              className="overlay"
            >
              {product.price.toPrecision(3)} BGN
            </Typography>
          </Box>
        )}
      </Paper>
    </Grid>
  );
};

export default ProductView;
