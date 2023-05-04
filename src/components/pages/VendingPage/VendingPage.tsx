import { useState } from "react";
import testProductList from "../../../utility/testProductList.json";
import { Product } from "../../../types/models/Product.model";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";
import { Box, Typography } from "@mui/material";
import VendingPageStyles from "./VendingPageStyles";

const VendingPage = () => {
  const [productList, setProductList] = useState<Product[]>(testProductList);
  const [openNewProduct, setOpenNewProduct] = useState(false);

  const handleNewProduct = () => {
    setOpenNewProduct(true);
  };

  return (
    <Box sx={VendingPageStyles.page}>
      <Typography variant="h1">VEMA</Typography>
      <ProductSelectionBox
        productList={productList}
        openNewProduct={handleNewProduct}
      />
    </Box>
  );
};

export default VendingPage;
