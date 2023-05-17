import { Product } from "../../../types/models/Product.model";
import ProductView from "../../atoms/ProductView/ProductView";
import { Box, Grid, Typography } from "@mui/material";
import ProductSelectionBoxStyles from "./ProductSelectionBoxStyles";

type ProductSelectionBoxProps = {
  productList: Product[];
  openNewProduct: () => void;
};

const ProductSelectionBox = ({
  productList,
  openNewProduct,
}: ProductSelectionBoxProps) => {
  return (
    <>
      <Typography variant="h2">Select a product</Typography>
      <Box>
        <Grid container spacing={0} sx={ProductSelectionBoxStyles.container}>
          {productList.map((product, index) => {
            return (
              <ProductView
                key={index}
                product={product}
                openNewProduct={openNewProduct}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ProductSelectionBox;
