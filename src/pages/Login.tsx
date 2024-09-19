import { useForm, SubmitHandler } from "react-hook-form";
import { loginUser, User } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components/AuthForm";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const nav = useNavigate();

  const handleLogin: SubmitHandler<User> = (values) => {
    loginUser(values)
      .then(({ data }) => {
        toast.success("Ok Minh dang nhap dc roi Yeah !");
        localStorage.setItem("token", data.accessToken);
        nav("/");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center">Login</h1>
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
}
