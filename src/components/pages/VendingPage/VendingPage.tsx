import { useLayoutEffect, useState } from "react";
import { Product } from "../../../types/models/Product.model";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";
import { Box, Typography } from "@mui/material";
import VendingPageStyles from "./VendingPageStyles";
import ProductService from "../../../services/ProductService";
import testProducts from "../../../utility/testProductList.json";
import DepositDisplay from "../../atoms/DepositDisplay/DepositDisplay";
import { CashRegister } from "../../../types/models/CashRegister.model";
import CashRegisterService from "../../../services/CashRegisterService";
import testCashRegister from "../../../utility/testCashRegister.json";

const VendingPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [cashRegister, setCashRegister] = useState<CashRegister>(null);
  const [openNewProduct, setOpenNewProduct] = useState(false);

  useLayoutEffect(() => {
    ProductService.getAllProducts()
      .then((res) => {
        setProductList(testProducts);
      })
      .catch(() => {
        setProductList(testProducts);
      });
    CashRegisterService.getAll()
      .then((res) => {
        res.data !== null && setCashRegister(res.data[0]);
      })
      .catch(() => {
        setCashRegister(testCashRegister);
      });
  }, []);

  const handleNewProduct = () => {
    setOpenNewProduct(true);
  };

  const handleReturnDeposit = () => {
    return cashRegister.coinsInDeposit;
  };

  return (
    <Box sx={VendingPageStyles.page}>
      {cashRegister !== null && (
        <DepositDisplay
          coinsInDeposit={cashRegister.coinsInDeposit}
          returnCoinsInDeposit={handleReturnDeposit}
        />
      )}

      <Typography variant="h1">VEMA</Typography>
      <Box sx={VendingPageStyles.pageContent}>
        {productList.length !== 0 && (
          <ProductSelectionBox
            productList={productList}
            openNewProduct={handleNewProduct}
          />
        )}
        {productList.length === 0 && (
          <Typography variant="h2">No products available</Typography>
        )}
      </Box>
    </Box>
  );
};

export default VendingPage;
