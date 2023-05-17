import { useLayoutEffect, useState } from "react";
import { Product } from "../../../types/models/Product.model";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";
import { Box, Typography } from "@mui/material";
import VendingPageStyles from "./VendingPageStyles";
import ProductService from "../../../services/ProductService";
import EditProductDialog from "../../organisms/EditProductDialog/EditProductDialog";
import AddProductDialog from "../../organisms/AddProductDialog/AddProductDialog";
import testProducts from "../../../utility/testProductList.json";
import DepositDisplay from "../../atoms/DepositDisplay/DepositDisplay";
import { CashRegister } from "../../../types/models/CashRegister.model";
import CashRegisterService from "../../../services/CashRegisterService";
import testCashRegister from "../../../utility/testCashRegister.json";

const VendingPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const [cashRegister, setCashRegister] = useState<CashRegister | undefined>();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const [activeProduct, setActiveProduct] = useState<Product | undefined>();

  useLayoutEffect(() => {
    ProductService.getAllProducts()
      .then((res) => {
        setProductList(res);
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

  const handleProductPanel = (product?: Product) => {
    if (product) {
      setActiveProduct(product);
    }
    setIsEditDialogOpen(true);
  };

  const handleReturnDeposit = () => {
    return cashRegister ? cashRegister.coinsInDeposit : [];
  };

  return (
    <Box sx={VendingPageStyles.page}>
      <AddProductDialog
        isOpen={isAddDialogOpen}
        setIsOpen={setIsAddDialogOpen}
        setProductList={setProductList}
      />
      <EditProductDialog
        key={activeProduct?.id}
        isOpen={isEditDialogOpen}
        setIsOpen={setIsEditDialogOpen}
        setProductList={setProductList}
        activeProduct={activeProduct}
      />
      {cashRegister !== null && (
        <DepositDisplay
          coinsInDeposit={cashRegister ? cashRegister.coinsInDeposit : []}
          returnCoinsInDeposit={handleReturnDeposit}
        />
      )}

      <Typography variant="h1">VEMA</Typography>
      <Box sx={VendingPageStyles.pageContent}>
        {productList.length !== 0 && (
          <ProductSelectionBox
            setProductList={setProductList}
            productList={productList}
            openEditProductDialog={handleProductPanel}
            openAddProductDialog={setIsAddDialogOpen}
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
