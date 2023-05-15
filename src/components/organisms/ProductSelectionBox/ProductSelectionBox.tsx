import React, { useLayoutEffect, useState } from "react";
import { Product } from "../../../types/models/Product.model";
import ProductView from "../../atoms/ProductView/ProductView";
import { Grid, Typography } from "@mui/material";
import ProductSelectionBoxStyles from "./ProductSelectionBoxStyles";

type ProductSelectionBoxProps = {
  productList: Product[];
  openProduct: (product: Product | undefined) => void;
};

const MAX_PRODUCTS_SHOWN = 10;

const ProductSelectionBox = ({
  productList,
  openProduct,
}: ProductSelectionBoxProps) => {
  const [filledProductList, setFilledProductList] = useState(productList);

  useLayoutEffect(() => {
    setFilledProductList(() => {
      return productList.concat(
        new Array(MAX_PRODUCTS_SHOWN - productList.length).fill(null)
      );
    });
  }, [productList]);

  return (
    <>
      <Typography variant="h2">Select a product</Typography>

      <Grid container spacing={0} sx={ProductSelectionBoxStyles.container}>
        {filledProductList.map((product, index) => {
          return (
            <ProductView
              key={index}
              product={product}
              openProduct={openProduct}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default ProductSelectionBox;
