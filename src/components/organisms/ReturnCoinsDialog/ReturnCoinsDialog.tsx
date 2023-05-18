import React from "react";
import { Coin } from "../../../types/models/Coin.model";
import { Box, Dialog, Grid, Typography } from "@mui/material";
import COIN_TYPES from "../../../utility/coinTypes";
import { CoinType } from "../../molecules/InsertCoinBox/InsertCoinBox";
import CoinDisplay from "../../atoms/CoinDisplay/CoinDisplay";
import ReturnCoinsDialogStyles from "./ReturnCoinsDialogStyles";

type ReturnCoinsDialogProps = {
  open: boolean;
  closeDialog: () => void;
  returnedCoins: Coin[];
};

const ReturnCoinsDialog = ({
  open,
  closeDialog,
  returnedCoins,
}: ReturnCoinsDialogProps) => {
  const reversedCoinTypes = Array.from(COIN_TYPES);
  reversedCoinTypes.reverse();

  const countCoinType = (coins: Coin[], coinType: CoinType) => {
    return coins.filter((coin) => coin.coinValue === coinType.coinValue).length;
  };

  return (
    <Dialog open={open} onClose={closeDialog}>
      <Box sx={ReturnCoinsDialogStyles.box}>
        <Typography variant="h4">
          {returnedCoins.length > 0
            ? "You receive the following coins:"
            : "No Coins inserted"}
        </Typography>
        <Grid container columns={10} columnSpacing={2}>
          {reversedCoinTypes.map((coinType, index) => {
            const coinCount = countCoinType(returnedCoins, coinType);
            if (coinCount === 0) {
              return <></>;
            }
            return (
              <Grid item key={index} sx={ReturnCoinsDialogStyles.gridItem}>
                <Typography sx={ReturnCoinsDialogStyles.coinCountText}>
                  {coinCount}x
                </Typography>
                <CoinDisplay coinType={coinType} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Dialog>
  );
};

export default ReturnCoinsDialog;
