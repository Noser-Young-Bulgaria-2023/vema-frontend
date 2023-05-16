export type Product = {
  id?: string;
  name: string;
  price: number;
  image?: {
    type: string;
    data: string;
  };
  amount: number;
};
