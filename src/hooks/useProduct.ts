import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { getAllProduct } from "../services/product";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../reducers/loadingReducer";
// import { useLoading } from "../context/loading";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // const { setLoading } = useLoading();

  const dispatch = useDispatch();

  useEffect(() => {
    // setLoading(true);
    dispatch(startLoading());
    getAllProduct()
      .then(({ data }) => {
        toast.success("oh Yeah");
        setProducts(data);
      })
      .catch((error) => toast.error("Error: " + error.message))
      .finally(() => dispatch(stopLoading()));
    // .finally(() => setLoading(false));
  }, []);

  return {
    products,
  };
};
