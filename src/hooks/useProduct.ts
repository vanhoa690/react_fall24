import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { getAllProduct } from "../services/product";
import toast from "react-hot-toast";
import { useLoading } from "../context/loading";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    getAllProduct()
      .then(({ data }) => {
        toast.success("oh Yeah");
        setProducts(data);
      })
      .catch((error) => toast.error("Error: " + error.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    products,
  };
};
