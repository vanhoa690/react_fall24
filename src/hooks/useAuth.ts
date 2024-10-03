import { SubmitHandler } from "react-hook-form";
import { loginUser, registerUser, User } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const nav = useNavigate();

  const handleLogin: SubmitHandler<User> = (values) => {
    loginUser(values)
      .then(({ data }) => {
        toast.success("Ok Minh dang nhap dc roi Yeah !");
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        nav("/");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  const handleRegister: SubmitHandler<User> = (values) => {
    registerUser(values)
      .then(() => {
        toast.success("Ok Minh dang ky dc roi Yeah !");
        nav("/login");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };
  return {
    handleLogin,
    handleRegister,
  };
};
