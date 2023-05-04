import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Product } from "../../../types/models/Product.model";
import styled from "styled-components";
import ProductViewStyles from "./ProductViewStyles";

type ProductViewProps = {
  product?: Product;
};

const StyledProductView = styled.div.attrs(() => ({}))`
  background-color: green;
  width: 350px;
  height: 350px;
`;

const ProductView = ({ product }: ProductViewProps) => {
  return (
    <Grid item>
      <Paper sx={ProductViewStyles.paper}>
        <Box
          className="backgroundGradient"
          sx={ProductViewStyles.backgroundGradient}
        ></Box>
        {product && (
          <Box sx={ProductViewStyles.content}>
            <img
              src={product.imagePath}
              alt={product.name}
              style={ProductViewStyles.image}
            />
            <Typography className="hoverText" sx={ProductViewStyles.hoverText}>
              {product.name}
            </Typography>
          </Box>
        )}
      </Paper>
    </Grid>
  );
};

export default ProductView;
