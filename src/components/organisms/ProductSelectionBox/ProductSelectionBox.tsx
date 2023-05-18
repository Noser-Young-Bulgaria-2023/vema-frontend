import { Product } from "../../../types/models/Product.model";
import ProductView from "../../molecules/ProductView/ProductView";
import { Box, Grid, Typography } from "@mui/material";
import ProductSelectionBoxStyles from "./ProductSelectionBoxStyles";
import AddProductView from "../../molecules/AddProductView/AddProductView";

type ProductSelectionBoxProps = {
  productList: Product[];
  openEditProductDialog: (product: Product | undefined) => void;
  openAddProductDialog: (isOpen: boolean) => void;
  setProductList: (productList: Product[]) => void;
  handleBuyProduct: (product: Product) => void;
};

const ProductSelectionBox = ({
  productList,
  openEditProductDialog,
  openAddProductDialog,
  setProductList,
  handleBuyProduct,
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
                buyProduct={handleBuyProduct}
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
