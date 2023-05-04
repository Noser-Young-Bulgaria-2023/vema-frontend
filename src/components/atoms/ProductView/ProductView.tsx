import { Product } from "../../../types/models/Product.model";
import styled from "styled-components";

type ProductViewProps = {
  product: Product;
};

const StyledProductView = styled.div.attrs(() => ({}))`
  background-color: green;
  width: 350px;
  height: 350px;
`;

const ProductView = ({ product }: ProductViewProps) => {
  return (
    <>
      <StyledProductView>
        <img
          src={product.imagePath}
          alt=""
          style={{ height: "250px", width: "250px", objectFit: "contain" }}
        />
        <p>{product.name}</p>
      </StyledProductView>
    </>
  );
};

export default ProductView;
