import React, { useEffect, useState } from "react";
import { Product } from "../../../types/models/Product.model";
import ProductView from "../../atoms/ProductView/ProductView";
import { Grid, Typography } from "@mui/material";

type ProductSelectionBoxProps = {
  productList: Product[];
};

const MAX_PRODUCTS_SHOWN = 10;

const ProductSelectionBox = ({ productList }: ProductSelectionBoxProps) => {
  const [filledProductList, setFilledProductList] = useState(productList);

  useEffect(() => {
    setFilledProductList(() => {
      return productList.concat(
        new Array(MAX_PRODUCTS_SHOWN - productList.length).fill(null)
      );
    });
  }, [productList]);

  return (
    <div>
      <Typography variant="h2">Select a product</Typography>

      <Grid container spacing={0}>
        {filledProductList.map((product, index) => {
          return <ProductView key={index} product={product} />;
        })}
      </Grid>
    </div>
  );
};

export default ProductSelectionBox;
