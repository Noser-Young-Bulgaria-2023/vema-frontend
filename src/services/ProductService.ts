import api from "../config/Api";
import { Product } from "../types/models/Product.model";

const ProductService = {
  getProduct: async (id: string) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },
  getAllProducts: async (): Promise<Product[]> => {
    const { data } = await api.get(`/products`);
    return data;
  },
  saveProduct: async (product: Product) => {
    const bodyFormData = new FormData();

    bodyFormData.append("product-image", new Blob([product.imageBlob]));
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
  updateProduct: async (productId: string, product: Product) => {
    const bodyFormData = new FormData();

    bodyFormData.append("product-image", new Blob([product.imageBlob]));
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
};

export default ProductService;
