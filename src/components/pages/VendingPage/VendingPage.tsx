import { useLayoutEffect, useState } from "react";
import { Product } from "../../../types/models/Product.model";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";
import { Box } from "@mui/material";
import VendingPageStyles from "./VendingPageStyles";
import ProductService from "../../../services/ProductService";
import EditProductDialog from "../../organisms/EditProductDialog/EditProductDialog";
import AddProductDialog from "../../organisms/AddProductDialog/AddProductDialog";
import testProducts from "../../../utility/testProductList.json";
import DepositDisplay from "../../atoms/DepositDisplay/DepositDisplay";
import { CashRegister } from "../../../types/models/CashRegister.model";
import CashRegisterService from "../../../services/CashRegisterService";
import BuyProductDialog from "../../organisms/BuyProductDialog/BuyProductDialog";
import { Coin } from "../../../types/models/Coin.model";
import logo from "./../../../assets/images/vema-logo.png";
import ReturnCoinsDialog from "../../organisms/ReturnCoinsDialog/ReturnCoinsDialog";

const VendingPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const [cashRegister, setCashRegister] = useState<CashRegister>();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const [activeProduct, setActiveProduct] = useState<Product>();
  const [openBuyMenu, setOpenBuyMenu] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [isCoinInserting, setCoinInserting] = useState(false);
  const [isReturnCoinsDialogOpen, setIsReturnCoinsDialogOpen] = useState(false);

  useLayoutEffect(() => {
    ProductService.getAllProducts()
      .then((res) => {
        setProductList(res);
      })
      .catch(() => {
        setProductList(testProducts);
      });
    if (!cashRegister) {
      CashRegisterService.create({
        id: "0",
        coinsInDeposit: [],
        coinsInInternalStorage: [],
      }).then((res) => {
        setCashRegister(res.data);
      });
    }
  }, []);

  const handleProductPanel = (product?: Product) => {
    if (product) {
      setActiveProduct(product);
    }
    setIsEditDialogOpen(true);
  };

  const handleReturnDeposit = () => {
    setIsReturnCoinsDialogOpen(true);
    setOpenBuyMenu(false);
  };

  const handleCloseReturnDeposit = () => {
    if (!cashRegister) return;
    const newCashRegister: CashRegister = {
      ...cashRegister,
      coinsInDeposit: [],
    };
    CashRegisterService.updateById(newCashRegister).then((res) => {
      setCashRegister(res.data);
    });
    setIsReturnCoinsDialogOpen(false);
  };

  const handleBuyProduct = (product: Product) => {
    setCurrentProduct(product);
    setOpenBuyMenu(true);
  };

  const handleCloseBuyMenu = () => {
    setOpenBuyMenu(false);
    setCurrentProduct(undefined);
  };

  const handleInsertCoin = (coin: Coin) => {
    if (!cashRegister) {
      return;
    }
    if (!isCoinInserting) {
      setCoinInserting(true);
      CashRegisterService.insertCoin(cashRegister.id, coin)
        .then((res) => {
          setCoinInserting(false);
          setCashRegister(res.data);
        })
        .catch(() => setCoinInserting(false));
    }
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
      <BuyProductDialog
        open={openBuyMenu}
        closeDialog={handleCloseBuyMenu}
        product={currentProduct}
        cashRegister={cashRegister}
        handleInsertCoin={handleInsertCoin}
        handleReturnDeposit={handleReturnDeposit}
      />
      {cashRegister !== null && !openBuyMenu && (
        <DepositDisplay
          coinsInDeposit={cashRegister ? cashRegister.coinsInDeposit : []}
          returnCoinsInDeposit={handleReturnDeposit}
        />
      )}

      {cashRegister && (
        <ReturnCoinsDialog
          open={isReturnCoinsDialogOpen}
          closeDialog={handleCloseReturnDeposit}
          returnedCoins={cashRegister.coinsInDeposit}
        />
      )}

      <img src={logo} alt="logo" />
      <Box sx={VendingPageStyles.pageContent}>
        <ProductSelectionBox
          setProductList={setProductList}
          productList={productList}
          openEditProductDialog={handleProductPanel}
          openAddProductDialog={setIsAddDialogOpen}
          handleBuyProduct={handleBuyProduct}
        />
      </Box>
    </Box>
  );
};

export default VendingPage;
