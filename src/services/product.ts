import { http } from "../config/axios";

type Product = {
  title: string;
};

export const getAllProduct = () => {
  return http.get("/products");
};

export const getProductDetail = (id: string) => {
  return http.get("/products/" + id);
};

export const deleteProduct = (id: number) => {
  return http.delete("/products/" + id);
};

export const addProduct = (data: Product) => {
  return http.post("/products", data);
};
