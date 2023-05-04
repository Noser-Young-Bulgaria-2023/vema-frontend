import { useState } from "react";
import testProductList from "../../../utility/testProductList.json";
import { Product } from "../../../types/models/Product.model";
import { Outlet } from "react-router-dom";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";

const VendingPage = () => {
  const [productList, setProductList] = useState<Product[]>(testProductList);

  return (
    <>
      <h1>VEMA</h1>
      <ProductSelectionBox productList={productList} />
    </>
  );
};

export default VendingPage;
