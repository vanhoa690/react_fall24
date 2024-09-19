import { useForm, SubmitHandler } from "react-hook-form";
import { loginUser, User } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors?.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Minimum 4 Characters required",
              },
            })}
          />
          {errors?.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
