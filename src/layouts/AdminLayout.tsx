import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  );
}
