import { useEffect, useState } from "react";
import { getAllProduct, getProductDetail } from "../services/product";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { Image } from "antd";

type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!id) return;
    getProductDetail(id)
      .then(({ data }) => setProduct(data))
      .catch((e) => {
        toast.error("Error: " + (e as AxiosError).message);
      });
  }, [id]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Product Detail</h1>
      {product && (
        <div className="row">
          <div className="col">
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            {/* <img src={product.image} className="card-img-top" alt="..." /> */}
          </div>
          <div className="col">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: {product.price} VND</p>
          </div>
        </div>
      )}
    </div>
  );
}
