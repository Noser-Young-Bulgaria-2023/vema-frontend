import api from "../config/Api";
import {Product} from "../types/models/Product.model";

const ProductService = {
    getProduct: (id: string) => {
        return api.get(`/products/${id}`);
    },
    getAllProducts: () => {
        return api.get(`/products`);
    },
    saveProduct: (product: Product, productImage) => {
        const bodyFormData = new FormData();

        bodyFormData.append('product-image', new Blob([productImage]));
        bodyFormData.append('product', new Blob([JSON.stringify(product)], { type: "application/json" }));

        return api.post('/products', bodyFormData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
};

export default ProductService;
