import { Navigate, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
