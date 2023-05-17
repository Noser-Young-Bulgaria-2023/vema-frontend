import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Product } from "../../../types/models/Product.model";
import ProductViewStyles from "./ProductViewStyles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductService from "../../../services/ProductService";

type ProductViewProps = {
  product: Product;
  openProduct: (product: Product | undefined) => void;
  setProductList: (productList: Product[]) => void;
};

const ProductView = (props: ProductViewProps) => {
  return (
    <Grid item>
      <Paper
        sx={{
          ...ProductViewStyles.paper,
        }}
        variant="outlined"
        square
      >
        <Box
          className="backgroundGradient"
          sx={ProductViewStyles.backgroundGradient}
        ></Box>
        {props.product && (
          <Box sx={ProductViewStyles.content}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                onClick={() => props.openProduct(props.product)}
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
                  if (!props.product.id) return;
                  ProductService.deleteProduct(props.product.id).then(() => {
                    ProductService.getAllProducts().then(props.setProductList);
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
                src={`data:image/png;base64,${props.product.image?.data}`}
                alt={props.product.name}
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
              {props.product.name}
            </Typography>
          </Box>
        )}
      </Paper>
    </Grid>
  );
};

export default ProductView;
