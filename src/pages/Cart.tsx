import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { deleteProduct, getAllProduct } from "../services/product";
import { useCart } from "../context/cart";
import { useProductCart } from "../hooks/useProductCart";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function CartList() {
  const { cart } = useCart();
  const { deleteProductToCart } = useProductCart();

  return (
    <div className="container">
      <h1>Admin Product List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.products.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.product.id}</th>
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>
                <img src={item.product.image} alt="" width={80} />
              </td>
              <td>{item.quantity}</td>
              <td>
                <button
                  onClick={() => deleteProductToCart(item.product.id)}
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
