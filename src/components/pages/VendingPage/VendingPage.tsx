import { useLayoutEffect, useState } from "react";
import { Product } from "../../../types/models/Product.model";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";
import { Box, Typography } from "@mui/material";
import VendingPageStyles from "./VendingPageStyles";
import ProductService from "../../../services/ProductService";

const VendingPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [openNewProduct, setOpenNewProduct] = useState(false);

  useLayoutEffect(() => {
    ProductService.getAllProducts().then((res) => {
      setProductList(res.data);
    });
  }, []);

  const handleNewProduct = () => {
    setOpenNewProduct(true);
  };

  return (
    <Box sx={VendingPageStyles.page}>
      <Image style={ VendingPAgeStyles.logo } source={ require("/public/images/vema-logo.png") } alt="logo" />
      <ProductSelectionBox
        productList={productList}
        openNewProduct={handleNewProduct}
      />
    </Box>
  );
};

export default VendingPage;
