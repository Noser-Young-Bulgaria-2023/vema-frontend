import React from "react";
import { Product } from "../../../types/models/Product.model";
import ProductView from "../../atoms/ProductView/ProductView";
import { Grid, Typography } from "@mui/material";
import ProductSelectionBoxStyles from "./ProductSelectionBoxStyles";
import AddProductView from "../../atoms/AddProductView/AddProductView";

type ProductSelectionBoxProps = {
  productList: Product[];
  openEditProductDialog: (product: Product | undefined) => void;
  openAddProductDialog: (isOpen: boolean) => void;
  setProductList: (productList: Product[]) => void;
};

const MAX_PRODUCTS_SHOWN = 10;

const ProductSelectionBox = (props: ProductSelectionBoxProps) => {
  return (
    <>
      <Typography variant="h2">Select a product</Typography>

      <Grid container spacing={0} sx={ProductSelectionBoxStyles.container}>
        {React.Children.toArray(
          props.productList.map((product) => {
            return (
              <ProductView
                product={product}
                openProduct={props.openEditProductDialog}
                setProductList={props.setProductList}
              />
            );
          })
        )}
        {React.Children.toArray(
          new Array(MAX_PRODUCTS_SHOWN - props.productList.length).fill(
            <AddProductView
              openAddProductViewDialog={props.openAddProductDialog}
            />
          )
        )}
      </Grid>
    </>
  );
};

export default ProductSelectionBox;
