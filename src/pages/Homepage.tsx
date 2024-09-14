import { useEffect, useState } from "react";
import { getAllProduct } from "../services/product";
import toast from "react-hot-toast";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function Homepage() {
  // state: products
  // call api: axios
  // show error
  // show loading

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

  return (
    <div className="container">
      <h1>Homepage</h1>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {/* @for track item.id - map key=product.id (index) */}
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col mt-2">
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: {product.price} VND</p>
                <a href="#" className="btn btn-primary">
                  Detail
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
