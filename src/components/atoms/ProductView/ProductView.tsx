import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Product } from "../../../types/models/Product.model";
import ProductViewStyles from "./ProductViewStyles";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

type ProductViewProps = {
  product?: Product;
  openProduct: (product: Product | undefined) => void;
};

const ProductView = ({ product, openProduct }: ProductViewProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Grid item>
      <Paper
        sx={{
          ...ProductViewStyles.paper,
        }}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
        variant="outlined"
        square
      >
        <Box
          className="backgroundGradient"
          sx={ProductViewStyles.backgroundGradient}
        ></Box>
        {product && (
          <Box sx={ProductViewStyles.content}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
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
            </Box>
            <Box
              className="productImage"
              sx={{ ...ProductViewStyles.productImageContainer }}
            >
              <img
                src={`data:image/png;base64,${product.image.data}`}
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
          </Box>
        )}
        {!product && (
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <IconButton onClick={() => openProduct(undefined)}>
              <AddIcon
                sx={{
                  ...ProductViewStyles.addIcon,
                  color: showOverlay ? "white" : undefined,
                }}
              />
            </IconButton>
          </Box>
        )}
      </Paper>
    </Grid>
  );
};

export default ProductView;
