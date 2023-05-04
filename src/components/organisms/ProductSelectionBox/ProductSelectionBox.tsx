import React, { useEffect, useState } from "react";
import { Product } from "../../../types/models/Product.model";
import ProductView from "../../atoms/ProductView/ProductView";
import { Grid, Typography } from "@mui/material";
import ProductSelectionBoxStyles from "./ProductSelectionBoxStyles";

type ProductSelectionBoxProps = {
  productList: Product[];
  openNewProduct: () => void;
};

const MAX_PRODUCTS_SHOWN = 10;

const ProductSelectionBox = ({
  productList,
  openNewProduct,
}: ProductSelectionBoxProps) => {
  const [filledProductList, setFilledProductList] = useState(productList);

  useEffect(() => {
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
              openNewProduct={openNewProduct}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default ProductSelectionBox;
