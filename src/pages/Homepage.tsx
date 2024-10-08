import { Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useSelector } from "react-redux";
// import { useLoading } from "../context/loading";

export default function Homepage() {
  const { products } = useProduct();
  // const { isLoading } = useLoading();
  const isLoading = useSelector((state: any) => state.loading.isLoading);

  return (
    <div className="container">
      <h1>Homepage</h1>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col mt-2">
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.image} className="card-img-top" alt="..." />
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
