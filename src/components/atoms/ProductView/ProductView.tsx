import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Product } from "../../../types/models/Product.model";
import ProductViewStyles from "./ProductViewStyles";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useMemo, useState } from "react";

type ProductViewProps = {
  product?: Product;
  openNewProduct: () => void;
};

const ProductView = ({ product, openNewProduct }: ProductViewProps) => {
  const [isProductEmpty, setProductEmpty] = useState(product.amount === 0);

  useMemo(() => {
    setProductEmpty(product.amount === 0);
  }, [product.amount]);

  return (
    <Grid item>
      <Paper
        sx={{
          ...ProductViewStyles.paper,
          opacity: isProductEmpty ? 0.3 : 1,
          pointerEvents: isProductEmpty ? "none" : undefined,
          zIndex: isProductEmpty ? -1 : 10,
          position: isProductEmpty ? "relative" : undefined,
        }}
        square
        onClick={isProductEmpty ? openNewProduct : undefined}
      >
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
            <Typography
              className="hoverText"
              sx={{
                ...ProductViewStyles.hoverText,
                ...ProductViewStyles.hoverPrice,
              }}
            >
              {product.price} BGN
            </Typography>
          </Box>
        )}
        {!product && (
          <IconButton onClick={openNewProduct}>
            <AddIcon className="addIcon" sx={ProductViewStyles.addIcon} />
          </IconButton>
        )}
      </Paper>
    </Grid>
  );
};

export default ProductView;
