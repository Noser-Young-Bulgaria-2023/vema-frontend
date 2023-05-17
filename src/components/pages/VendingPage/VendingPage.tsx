import { useLayoutEffect, useState } from "react";
import { Product } from "../../../types/models/Product.model";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";
import { Box, Typography } from "@mui/material";
import VendingPageStyles from "./VendingPageStyles";
import ProductService from "../../../services/ProductService";
import EditProductDialog from "../../organisms/EditProductDialog/EditProductDialog";
import AddProductDialog from "../../organisms/AddProductDialog/AddProductDialog";

const VendingPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const [activeProduct, setActiveProduct] = useState<Product | undefined>();

  useLayoutEffect(() => {
    ProductService.getAllProducts().then(setProductList);
  }, []);

  const handleProductPanel = (product?: Product) => {
    if (product) {
      setActiveProduct(product);
    }
    setIsEditDialogOpen(true);
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
      <Typography variant="h1">VEMA</Typography>
      <ProductSelectionBox
        setProductList={setProductList}
        productList={productList}
        openEditProductDialog={handleProductPanel}
        openAddProductDialog={setIsAddDialogOpen}
      />
    </Box>
  );
};

export default VendingPage;
