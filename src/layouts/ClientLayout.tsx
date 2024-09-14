import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function ClientLayout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
