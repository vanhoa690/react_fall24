import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../services/product";
import { Product } from "../types/Product";
import toast from "react-hot-toast";
import { addToCart } from "../services/cart";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!id) return;
    getProductDetail(id)
      .then(({ data }) => setProduct(data))
      .catch((error) => toast.error("Error: " + error.message));
  }, [id]);

  const handleAddToCart = (product: Product) => {
    const user = localStorage.getItem("user");
    if (!product || !user) return;
    const checkCart = true; // check product co trong carts. find()
    if (checkCart) {
      // khi add
      addToCart({
        product,
        quantity: 1,
        user: JSON.parse(user),
      }).then((data) => {
        toast.success("Add Cart Ok");
        console.log(data);
      });
    } else {
      // khi update
    }
  };
  return (
    <div className="container">
      <h2 className="text-center my-4">Product Detail</h2>
      {product && ( // @if
        <div className="row">
          <div className="col">
            <img src={product.image} className="card-img-top" alt="" />
          </div>
          <div className="col">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: {product.price} VND</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
