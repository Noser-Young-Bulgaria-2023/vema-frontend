import { Coin } from "./Coin.model";

export type CashRegister = {
  id: string;
  coinsInDeposit: Coin[];
  coinsInInternalStorage: Coin[];
};
