export type Product = {
  id: string;
  name: string;
  price: string;
  image: {
    type: number;
    data: string;
  };
  imageBlob?: Blob;
  amount: number;
};
