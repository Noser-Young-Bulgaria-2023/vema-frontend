import {
  Box,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Product } from "../../../types/models/Product.model";
import ProductViewStyles from "./ProductViewStyles";
import AddIcon from "@mui/icons-material/Add";

type ProductViewProps = {
  product?: Product;
  openNewProduct: () => void;
};

const ProductView = ({ product, openNewProduct }: ProductViewProps) => {
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
