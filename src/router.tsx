import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import PageHome from "./pages/Home";
import PageBasket from "./pages/Basket";
import Sneaker from "./pages/Sneaker";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/SneakMax/",
          element: <PageHome  />,
        },
        {
          path: "/SneakMax/basket/",
          element: <PageBasket />,
        },
        {
          path: "/SneakMax/sneakers/:id",
          element: <Sneaker />,
        },
      ],
    },
  ]);
  
  export default router;