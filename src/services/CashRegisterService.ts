import api from "../config/Api";

const CashRegisterService = {
  getAll: () => api.get("/cash-register/"),
};

export default CashRegisterService;
