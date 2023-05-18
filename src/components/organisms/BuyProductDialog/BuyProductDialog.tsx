import { Box, Dialog } from "@mui/material";
import { Product } from "../../../types/models/Product.model";
import BuyProductDialogStyles from "./BuyProductDialogStyles";
import { CashRegister } from "../../../types/models/CashRegister.model";
import ProductViewStyles from "../../molecules/ProductView/ProductViewStyles";
import { Coin } from "../../../types/models/Coin.model";
import DepositDisplay from "../../atoms/DepositDisplay/DepositDisplay";
import InsertCoinBox from "../../molecules/InsertCoinBox/InsertCoinBox";

type BuyProductDialogProps = {
  product?: Product;
  cashRegister?: CashRegister;
  open: boolean;
  closeDialog: () => void;
  handleReturnDeposit: () => Coin[];
  handleInsertCoin: (coin: Coin) => void;
};

const BuyProductDialog = ({
  product,
  cashRegister,
  open,
  closeDialog,
  handleReturnDeposit,
  handleInsertCoin,
}: BuyProductDialogProps) => {
  return (
    <Dialog open={open} onClose={closeDialog}>
      <Box sx={BuyProductDialogStyles.dialog}>
        {product && (
          <Box sx={{ ...ProductViewStyles.productImageContainer }}>
            <img
              src={`data:image/png;base64,${product.image?.data}`}
              alt={product.name}
              style={ProductViewStyles.productImage}
            />
          </Box>
        )}
        <DepositDisplay
          coinsInDeposit={cashRegister ? cashRegister.coinsInDeposit : []}
          returnCoinsInDeposit={handleReturnDeposit}
          sx={BuyProductDialogStyles.depositDisplay}
        />
        <InsertCoinBox handleInsertCoin={handleInsertCoin} />
      </Box>
    </Dialog>
  );
};

export default BuyProductDialog;
