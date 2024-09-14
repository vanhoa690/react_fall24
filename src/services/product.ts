import axios from "axios";

export const getAllProduct = () => {
  return axios.get("http://localhost:3000/products");
};
