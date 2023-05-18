import api from "../config/Api";
import { CashRegister } from "../types/models/CashRegister.model";
import { Coin } from "../types/models/Coin.model";

const CashRegisterService = {
  getAll: () => api.get("/cash-register/"),
  getById: (id: string) => api.get(`/cash-register/${id}`),
  create: (cashRegister: CashRegister) =>
    api.post("/cash-register/", cashRegister),
  updateById: (cashRegister: CashRegister) =>
    api.put(`/cash-register/${cashRegister.id}`, cashRegister),
  deleteById: (id: string) => api.delete(`/cash-register/${id}`),
  insertCoin: (id: string, coin: Coin) =>
    api.put(`/cash-register/${id}/insert-coin`, coin),
  checkout: (cashRegister: CashRegister) =>
    api.put(`/cash-register/checkout`, cashRegister),
};

export default CashRegisterService;
