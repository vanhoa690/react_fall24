import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "./ProductAdd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { editProductDetail, getProductDetail } from "../../services/product";
import toast from "react-hot-toast";

export default function ProductEdit() {
  const { id } = useParams();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (!id) return;
    getProductDetail(id)
      .then(({ data }) => {
        reset(data);
      })
      .catch(() => toast.error("Error"));
  }, []);

  const handleEditProduct: SubmitHandler<Inputs> = (values) => {
    if (!id) return;
    editProductDetail(id, values)
      .then((data) => {
        toast.success("Edit Success");
        nav("/admin/product/list");
      })
      .catch(() => toast.error("Error"));
  };

  return (
    <div className="container">
      <h1>Product Edit</h1>
      <form onSubmit={handleSubmit(handleEditProduct)}>
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
