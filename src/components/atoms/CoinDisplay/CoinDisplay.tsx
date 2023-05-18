import React from "react";
import { Coin } from "../../../types/models/Coin.model";
import { Grid, Typography } from "@mui/material";
import { CoinType } from "../../molecules/InsertCoinBox/InsertCoinBox";
import CoinDisplayStyles from "./CoinDisplayStyles";

type CoinDisplayProps = {
  coinType: CoinType;
  handleInsertCoin: (coin: Coin) => void;
};

const CoinDisplay = ({ coinType, handleInsertCoin }: CoinDisplayProps) => {
  return (
    <Grid
      item
      md={2}
      xs={5}
      onClick={() => {
        handleInsertCoin({ coinValue: coinType.coinValue });
      }}
      sx={CoinDisplayStyles.gridItem}
    >
      <img
        src={`./../../../images/${coinType.imgPath}`}
        alt={coinType.coinName}
        style={CoinDisplayStyles.coinImage}
      />
      <Typography sx={CoinDisplayStyles.coinNameText}>
        {coinType.coinName}
      </Typography>
    </Grid>
  );
};

export default CoinDisplay;
