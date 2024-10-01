import { SubmitHandler } from "react-hook-form";
import { addProduct } from "../../services/product";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "../../components/ProductForm";

export type Inputs = {
  title: string;
  // image
  // price
  // description
  // category
};

export default function ProductAdd() {
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
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
}
