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
      <Typography variant="h1">VEMA</Typography>
      <ProductSelectionBox
        productList={productList}
        openNewProduct={handleNewProduct}
      />
    </Box>
  );
};

export default VendingPage;
