import { useState } from "react";
import testProductList from "../../../utility/testProductList.json";
import { Product } from "../../../types/models/Product.model";
import { Outlet } from "react-router-dom";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";
import { Typography } from "@mui/material";

const VendingPage = () => {
  const [productList, setProductList] = useState<Product[]>(testProductList);

  return (
    <>
      <Typography variant="h1">VEMA</Typography>
      <ProductSelectionBox productList={productList} />
    </>
  );
};

export default VendingPage;
