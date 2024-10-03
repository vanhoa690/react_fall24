import { Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

export default function Cart() {
  const { loading, products } = useProduct();

  return (
    <div className="container">
      <h1>Carts</h1>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Desc</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.price} VND</td>
                <td>
                  <img src={product.image} alt="" width={80} />
                </td>
                <td>{product.description}</td>
                <td>
                  <Link to={`/admin/product/edit/${product.id}`}>
                    <button className="btn btn-info">Edit</button>
                  </Link>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
