import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useProductCart } from "../hooks/useProductCart";
import { useEffect } from "react";

export default function ClientLayout() {
  const { getCartInfo } = useProductCart();

  useEffect(() => {
    getCartInfo();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  );
}
