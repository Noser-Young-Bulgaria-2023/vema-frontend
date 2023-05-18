import { Children, createContext, useState } from "react";
import { Product } from "../types/models/Product.model";

export type ShoppingCartContextType = {
  productsInCart: Product[];
  addNewProductToCart: (product: Product) => void;
  increaseAmountOfProductInCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  removeAllOfProductFromCart: (product: Product) => void;
};

const noContextProviderFound = () => {
  throw new Error("No provider for ShoppingCartContext found");
};

const defaultContextValue: ShoppingCartContextType = {
  productsInCart: [],
  addNewProductToCart: noContextProviderFound,
  increaseAmountOfProductInCart: noContextProviderFound,
  removeProductFromCart: noContextProviderFound,
  removeAllOfProductFromCart: noContextProviderFound,
};

const ShoppingCartContext =
  createContext<ShoppingCartContextType>(defaultContextValue);
export default ShoppingCartContext;

type ShoppingCartContextProps = {
  children: React.ReactNode;
};

export const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProps) => {
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

  const addNewProductToCart = (newProduct: Product) => {
    const newProductInCart = productsInCart.find(
      (product) => product.name === newProduct.name
    );
    if (newProductInCart) {
      increaseAmountOfProductInCart(newProductInCart);
    }
    if (!newProductInCart) {
      setProductsInCart((prev) => [...prev, { ...newProduct, amount: 1 }]);
    }
  };

  const increaseAmountOfProductInCart = (newProduct: Product) => {
    const newProductCart = productsInCart.splice(
      productsInCart.indexOf(newProduct),
      1,
      { ...newProduct, amount: newProduct.amount++ }
    );
    setProductsInCart(newProductCart);
  };

  const removeProductFromCart = (removedProduct: Product) => {};

  const removeAllOfProductFromCart = (removedProduct: Product) => {};

  return (
    <div>
      <ShoppingCartContext.Provider
        value={{
          productsInCart,
          addNewProductToCart,
          increaseAmountOfProductInCart,
          removeProductFromCart,
          removeAllOfProductFromCart,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </div>
  );
};
