import axios from "axios";
import { Product } from "./product";

export type Cart = {
  id: number;
  products: {
    product: Product;
    quantity: number;
  }[];
  userId: number;
};
export type CartData = Omit<Cart, "id">;

export const getCartUser = (userId: string) => {
  return axios.get(`http://localhost:3000/carts?userId=${userId}`);
};

export const addToCart = (data: CartData) => {
  return axios.post("http://localhost:3000/carts", data);
};

export const updateCart = (id: number, data: CartData) => {
  return axios.put(`http://localhost:3000/carts/${id}`, data);
};

export const deleteProductCart = (id: number, data: CartData) => {
  return axios.put(`http://localhost:3000/carts/${id}`, data);
};
