import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import {
  addToCart,
  deleteProductCart,
  getCartUser,
  updateCart,
} from "../services/cart";
import { Product } from "../services/product";

type AddToCart = {
  product: Product;
  quantity: number;
};

export const useProductCart = () => {
  const { cart, setCart } = useCart();

  const getCartInfo = async () => {
    const { data } = await getCartUser("1");
    const cart = data.length ? data[0] : null;
    setCart(cart);
  };
  const addProductToCart = async ({ product, quantity }: AddToCart) => {
    try {
      if (cart) {
        const existedProduct = cart.products.find(
          (item) => item.product.id === product.id
        );

        const products = existedProduct
          ? cart.products.map((item) =>
              item.product.id === product.id
                ? { product, quantity: item.quantity + quantity }
                : item
            )
          : [
              ...cart.products,
              {
                product,
                quantity,
              },
            ];
        await updateCart(cart.id, {
          products,
          userId: 1,
        });
      } else {
        await addToCart({
          products: [{ product, quantity }],
          userId: 1,
        });
      }
      await getCartInfo();
      toast.success("Add to Cart Ok");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProductToCart = async (productId: number) => {
    if (confirm("Xoa")) {
      try {
        if (!cart) return;
        const products = cart.products.filter(
          (item) => item.product.id !== productId
        );
        await deleteProductCart(cart.id, { products, userId: 1 });
        await getCartInfo();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return {
    getCartInfo,
    addProductToCart,
    deleteProductToCart,
  };
};
