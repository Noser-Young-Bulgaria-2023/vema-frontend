import { Grid, Typography } from "@mui/material";
import { Coin, CoinValueEnum } from "../../../types/models/Coin.model";
import CoinDisplay from "../../atoms/CoinDisplay/CoinDisplay";
import COIN_TYPES from "../../../utility/coinTypes";

export type CoinType = {
  imgPath: string;
  coinName: string;
  coinValue: CoinValueEnum;
};

type InsertCoinBoxProps = {
  handleInsertCoin: (coin: Coin) => void;
};

const InsertCoinBox = ({ handleInsertCoin }: InsertCoinBoxProps) => {
  return (
    <Grid container columns={10} columnSpacing={2}>
      <Grid item xs={10}>
        <Typography variant="h4">Insert Coins:</Typography>
      </Grid>
      {COIN_TYPES.map((coinType: CoinType, index) => (
        <Grid item md={2} xs={5}>
          <CoinDisplay
            key={index}
            coinType={coinType}
            handleInsertCoin={handleInsertCoin}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default InsertCoinBox;
