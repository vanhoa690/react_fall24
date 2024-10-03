import { http } from "../config/axios";
import { Product } from "../types/Product";
import { User } from "./auth";

type Cart = {
  product: Product;
  quantity: number;
  user: User;
};
export const addToCart = (data: Cart) => {
  return http.post("/carts", data);
};
