import axios from "axios";
export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};
export const getAllProduct = () => {
  return axios.get("http://localhost:3000/products");
};

export const getProductDetail = async (id: string) => {
  return axios.get("http://localhost:3000/products/" + id);
};

export const deleteProduct = async (id: number) => {
  return axios.delete("http://localhost:3000/products/" + id);
};
