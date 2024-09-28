import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientLayout from "./layouts/ClientLayout";
import ClientAntdLayout from "./layouts/ClientAntdLayout";
import { Toaster } from "react-hot-toast";
import ProductDetail from "./pages/ProductDetail";
import { RegisterAntd } from "./pages/antd/RegisterAntd";
import AdminLayout from "./layouts/AdminLayout";
import ProductList from "./pages/admin/ProductList";
import AdminProductListAntd from "./pages/antd/AdminProductListAntd";
import ProductAdd from "./pages/admin/ProductAdd";

function App() {
  const routeConfig = [
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "product/list",
          element: <ProductList />,
        },
        {
          path: "product/add",
          element: <ProductAdd />,
        },
      ],
    },
    {
      path: "",
      element: <ClientLayout />,
      children: [
        { path: "", element: <Homepage /> },
        { path: "about", element: <About /> },
        { path: "product/:id", element: <ProductDetail /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "antd",
      element: <ClientAntdLayout />,
      children: [
        { path: "", element: <Homepage /> },
        { path: "about", element: <About /> },
        { path: "register", element: <RegisterAntd /> },
        { path: "admin/product/list", element: <AdminProductListAntd /> },
      ],
    },
  ];

  const routes = useRoutes(routeConfig);

  return (
    <main>
      {routes}
      <Toaster />
    </main>
  );
}

export default App;
