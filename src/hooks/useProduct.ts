import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { addProduct, deleteProduct, getAllProduct } from "../services/product";
import toast from "react-hot-toast";
import { SubmitHandler } from "react-hook-form";
import { Inputs } from "../components/ProductForm";
import { useNavigate } from "react-router-dom";

export const useProduct = () => {
  const nav = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        toast.success("oh Yeah");
        setProducts(data);
      })
      .catch((error) => toast.error("Error: " + error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDeleteProduct = (id: number) => {
    if (window.confirm("Xoa that ko?")) {
      deleteProduct(id)
        .then(() => {
          toast.success(`Delete Product Id: ${id} Successfull`);
          location.reload();
        })
        .catch((error) => toast.error("Error: " + error.message));
    }
  };

  const handleAddProduct: SubmitHandler<Inputs> = (values) => {
    // call api
    addProduct(values)
      .then(() => {
        toast.success("Add Product Successfull");
        nav("/admin/product/list");
      })
      .catch(() => toast.error("Error"));
  };

  return {
    products,
    loading,
    handleDeleteProduct,
    handleAddProduct,
  };
};
