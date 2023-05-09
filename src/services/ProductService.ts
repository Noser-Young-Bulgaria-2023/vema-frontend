import api from "../config/Api";

const ProductService = {
  getProduct: (id: string) => {
    return api.get(`/product/${id}`);
  },
  getAllProducts: () => {
    return api.get(`/product`);
  },
};

export default ProductService;
