import { deleteProduct } from "../../services/product";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

export default function ProductList() {
  const { products, loading } = useProduct();

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
  return (
    <div className="container">
      <h1>Admin Product List</h1>
      <Link to="/admin/product/add">
        <button className="btn btn-primary">Add Product</button>
      </Link>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
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
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
