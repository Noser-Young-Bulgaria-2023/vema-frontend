export type Coin = {
  id?: string;
  coinValue: CoinValueEnum;
};

export enum CoinValueEnum {
  TEN_ST = 0.1,
  TWENTY_ST = 0.2,
  FIFTY_ST = 0.5,
  ONE_LEVA = 1,
  TWO_LEVA = 2,
}
