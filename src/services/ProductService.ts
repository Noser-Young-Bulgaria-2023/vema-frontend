import api from "../config/Api";

const ProductService = {
  getProduct: (id: string) => {
    return api.get(`/products/${id}`);
  },
  getAllProducts: () => {
    return api.get(`/products`);
  },
};

export default ProductService;
