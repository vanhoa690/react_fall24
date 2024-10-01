import { SubmitHandler, useForm } from "react-hook-form";
import { addProduct } from "../../services/product";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Inputs = {
  title: string;
  // image
  // price
  // description
  // category
};

export default function ProductAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // zod
  } = useForm<Inputs>();

  const nav = useNavigate();

  const handleAddProduct: SubmitHandler<Inputs> = (values) => {
    // call api
    addProduct(values)
      .then(() => {
        toast.success("Add Product Successfull");
        nav("/admin/product/list");
      })
      .catch(() => toast.error("Error"));
  };

  return (
    <div className="container">
      <h1>Product Add</h1>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("title", {
              required: "Title is required",
            })}
          />
          {errors?.title && (
            <small className="text-danger">{errors.title.message}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
