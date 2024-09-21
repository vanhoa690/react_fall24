import { http } from "../config/axios";

export const getAllProduct = () => {
  return http.get("/products");
};

export const getProductDetail = (id: string) => {
  return http.get("/products/" + id);
};

export const deleteProduct = (id: number) => {
  return http.delete("/products/" + id);
};
