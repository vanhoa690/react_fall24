import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  // token: private routes
  // chen sidebar trong layout
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
