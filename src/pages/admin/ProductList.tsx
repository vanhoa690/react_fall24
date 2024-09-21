import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { deleteProduct, getAllProduct } from "../../services/product";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function ProducList() {
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

  const handleDelete = (id: number) => {
    if (window.confirm("Xoa")) {
      deleteProduct(id).then(() => location.reload());
    }
  };
  return (
    <div className="container">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <h1>Admin Product List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt="" width={80} />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(product.id)}
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
