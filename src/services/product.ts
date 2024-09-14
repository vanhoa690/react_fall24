import axios from "axios";

export const getAllProduct = () => {
  return axios.get("http://localhost:3000/products");
};

export const getProductDetail = (id: string) => {
  return axios.get("http://localhost:3000/products/" + id);
};
