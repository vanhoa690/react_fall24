import { useEffect, useState } from "react";
import { getAllProduct } from "../services/product";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function Homepage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => setProducts(data))
      .catch((e) => {
        toast.error("Error: " + (e as AxiosError).message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <h1>Homepage</h1>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col mt-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: {product.price} VND</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
