import axios from "axios";

export type User = {
  email: string;
  password: string;
};

export const registerUser = (data: User) => {
  return axios.post("http://localhost:3000/register", data);
};

export const loginUser = (data: User) => {
  return axios.post("http://localhost:3000/login", data);
};
