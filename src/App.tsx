import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ClientLayout from "./layouts/ClientLayout";

const routeConfig = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      { path: "about", element: <About /> },
    ],
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
