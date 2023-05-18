import { CoinType } from "../components/molecules/InsertCoinBox/InsertCoinBox";
import { CoinValueEnum } from "../types/models/Coin.model";

const COIN_TYPES: CoinType[] = [
  {
    imgPath: "10_st_coin.png",
    coinName: "10 St.",
    coinValue: CoinValueEnum.TEN_ST,
  },
  {
    imgPath: "20_st_coin.png",
    coinName: "20 St.",
    coinValue: CoinValueEnum.TWENTY_ST,
  },
  {
    imgPath: "50_st_coin.png",
    coinName: "50 St.",
    coinValue: CoinValueEnum.FIFTY_ST,
  },
  {
    imgPath: "1_leva_coin.png",
    coinName: "1 Leva",
    coinValue: CoinValueEnum.ONE_LEVA,
  },
  {
    imgPath: "2_leva_coin.png",
    coinName: "2 Leva",
    coinValue: CoinValueEnum.TWO_LEVA,
  },
];

export default COIN_TYPES;
