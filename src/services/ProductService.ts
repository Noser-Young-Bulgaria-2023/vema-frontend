import api from "../config/Api";
import { Product } from "../types/models/Product.model";

async function urltoFile(url: string) {
  const res = await fetch(url);
  return await res.arrayBuffer();
}

const ProductService = {
  getProduct: async (id: string) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },
  getAllProducts: async (): Promise<Product[]> => {
    const { data } = await api.get(`/products`);
    return data;
  },
  saveProduct: async (product: Product, productImageUrl: string) => {
    const bodyFormData = new FormData();
    const imageFile = await urltoFile(productImageUrl);

    bodyFormData.append("product-image", new Blob([imageFile]));
    bodyFormData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    return await api.post("/products", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateProduct: async (
    productId: string,
    product: Product,
    productImageUrl: string
  ) => {
    const bodyFormData = new FormData();
    const imageFile = await urltoFile(productImageUrl);

    bodyFormData.append("product-image", new Blob([imageFile]));
    bodyFormData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    return await api.put(`/products/${productId}/`, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  deleteProduct: async (productId: string) => {
    return await api.delete(`/products/${productId}/`);
  },
};

export default ProductService;
