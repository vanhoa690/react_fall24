import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../pages/admin/ProductAdd";
import { useEffect } from "react";
import { getProductDetail } from "../services/product";
import toast from "react-hot-toast";

type Props = {
  productId?: string;
  onSubmit: SubmitHandler<Inputs>;
};

export function ProductForm({ productId, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (!productId) return;
    getProductDetail(productId)
      .then(({ data }) => {
        reset(data);
      })
      .catch(() => toast.error("Error"));
  }, [productId]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
  );
}
