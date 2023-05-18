import React from "react";
import { Coin } from "../../../types/models/Coin.model";
import { Button, Paper, SxProps, Typography } from "@mui/material";
import DepositDisplayStyles from "./DepositDisplayStyles";

type DepositDisplayProps = {
  coinsInDeposit: Coin[];
  returnCoinsInDeposit: () => void;
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
    coins.forEach((coin) => (value += Number(coin.coinValue)));
    return value;
  };

  return (
    <Paper sx={{ ...DepositDisplayStyles.paper, ...sx }}>
      <Typography sx={DepositDisplayStyles.text}>
        Deposit: {calculateDepositValue(coinsInDeposit).toFixed(2)} BGN
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
