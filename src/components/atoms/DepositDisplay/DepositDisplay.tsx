import React from "react";
import { Coin } from "../../../types/models/Coin.model";
import { Button, Paper, SxProps, Typography } from "@mui/material";
import DepositDisplayStyles from "./DepositDisplayStyles";

type DepositDisplayProps = {
  coinsInDeposit: Coin[];
  returnCoinsInDeposit: () => Coin[];
  sx?: SxProps;
};

const DepositDisplay = ({
  coinsInDeposit,
  returnCoinsInDeposit,
  sx,
}: DepositDisplayProps) => {
  const calculateDepositValue = (coins: Coin[]) => {
    if (!coins) {
      return 0;
    }
    let value = 0;
    coins.forEach((coin) => (value += Number(coin.coinValue.toPrecision(3))));
    return value;
  };

  return (
    <Paper sx={{ ...DepositDisplayStyles.paper, ...sx }}>
      <Typography sx={DepositDisplayStyles.text}>
        Deposit: {calculateDepositValue(coinsInDeposit).toPrecision(3)} BGN
      </Typography>
      <Button
        variant="contained"
        sx={DepositDisplayStyles.button}
        onClick={returnCoinsInDeposit}
      >
        Return Deposit
      </Button>
    </Paper>
  );
};

export default DepositDisplay;
