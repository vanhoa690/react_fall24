import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientLayout from "./layouts/ClientLayout";
// import ClientAntdLayout from "./layouts/ClientAntdLayout";

function App() {
  const routeConfig = [
    {
      path: "",
      element: <ClientLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/about", element: <About /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ];

  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
