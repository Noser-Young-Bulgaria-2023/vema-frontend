import React from "react";
import { Product } from "../../../types/models/Product.model";
import ProductView from "../../atoms/ProductView/ProductView";
import styled from "styled-components";

type ProductSelectionBoxProps = {
  productList: Product[];
};

const ProductListBox = styled.div``;

const ProductSelectionBox = ({ productList }: ProductSelectionBoxProps) => {
  return (
    <div>
      <h2>Select a product</h2>

      <ProductListBox className="grid grid-cols-5 gap-0">
        {productList.map((product, index) => {
          return <ProductView key={index} product={product} />;
        })}
      </ProductListBox>
    </div>
  );
};

export default ProductSelectionBox;
