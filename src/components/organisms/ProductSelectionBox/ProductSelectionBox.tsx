import { Product } from "../../../types/models/Product.model";
import ProductView from "../../atoms/ProductView/ProductView";
import { Box, Grid, Typography } from "@mui/material";
import ProductSelectionBoxStyles from "./ProductSelectionBoxStyles";
import AddProductView from "../../atoms/AddProductView/AddProductView";

type ProductSelectionBoxProps = {
  productList: Product[];
  openEditProductDialog: (product: Product | undefined) => void;
  openAddProductDialog: (isOpen: boolean) => void;
  setProductList: (productList: Product[]) => void;
};

const ProductSelectionBox = ({
  productList,
  openEditProductDialog,
  openAddProductDialog,
  setProductList,
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
                openProduct={openEditProductDialog}
                setProductList={setProductList}
              />
            );
          })}
          <AddProductView openAddProductViewDialog={openAddProductDialog} />
        </Grid>
      </Box>
    </>
  );
};

export default ProductSelectionBox;
