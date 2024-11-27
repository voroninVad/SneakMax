import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import PageHome from "./pages/Home";
import PageBasket from "./pages/Basket";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/SneakMax/",
          element: <PageHome />,
        },
        {
          path: "/SneakMax/basket/",
          element: <PageBasket />,
        },
        // {
        //   path: "/Jelly-Belly/facts/",
        //   element: <FactsPage />,
        // },
      ],
    },
  ]);
  
  export default router;