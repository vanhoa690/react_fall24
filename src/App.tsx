import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientLayout from "./layouts/ClientLayout";
import { Toaster } from "react-hot-toast";
import ProductDetail from "./pages/ProductDetail";
import ClientAntdLayout from "./layouts/ClientAntdLayout";
import RegisterAntd from "./pages/antd/RegisterAntd";
import AdminLayout from "./layouts/AdminLayout";
import ProducList from "./pages/admin/ProductList";
import ProducListAntd from "./pages/antd/admin/ProductListAntd";
import CartList from "./pages/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const routeConfig = [
    {
      path: "admin",
      element: <AdminLayout />,
      children: [{ path: "product/list", element: <ProducList /> }],
    },
    {
      path: "",
      element: <ClientLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/about", element: <About /> },
        { path: "/product/:id", element: <ProductDetail /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/carts", element: <CartList /> },
      ],
    },
    {
      path: "antd",
      element: <ClientAntdLayout />,
      children: [
        { path: "", element: <Homepage /> },
        { path: "about", element: <About /> },
        { path: "product/:id", element: <ProductDetail /> },
        { path: "register", element: <RegisterAntd /> },
        { path: "product/list", element: <ProducListAntd /> },
      ],
    },
  ];

  const routes = useRoutes(routeConfig);

  return (
    <main>
      <CartProvider>{routes}</CartProvider>
      <Toaster />
    </main>
  );
}

export default App;
