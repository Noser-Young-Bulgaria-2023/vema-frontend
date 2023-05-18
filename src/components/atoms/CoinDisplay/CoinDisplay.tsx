import { Coin } from "../../../types/models/Coin.model";
import { Box, Typography } from "@mui/material";
import { CoinType } from "../../molecules/InsertCoinBox/InsertCoinBox";
import CoinDisplayStyles from "./CoinDisplayStyles";

type CoinDisplayProps = {
  coinType: CoinType;
  handleInsertCoin?: (coin: Coin) => void;
};

const CoinDisplay = ({ coinType, handleInsertCoin }: CoinDisplayProps) => {
  return (
    <Box
      onClick={() => {
        handleInsertCoin && handleInsertCoin({ coinValue: coinType.coinValue });
      }}
      sx={CoinDisplayStyles.gridItem}
    >
      <img
        src={require(`./../../../assets/images/${coinType.imgPath}`)}
        alt={coinType.coinName}
        style={CoinDisplayStyles.coinImage}
      />

      <Typography sx={CoinDisplayStyles.coinNameText}>
        {coinType.coinName}
      </Typography>
    </Box>
  );
};

export default CoinDisplay;
