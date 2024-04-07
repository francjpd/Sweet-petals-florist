import { createBrowserRouter } from "react-router-dom";
import Root from "../shared/Root/Root";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import { ListProductsPage } from "../features/ListProducts/ListProductsPage";
import { ProductDetailsPage } from "../features/ProductDetails/ProductDetailsPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ListProductsPage></ListProductsPage>,
      },
      {
        path: "/:id",
        element: <ProductDetailsPage></ProductDetailsPage>,
      },
    ],
  },
]);

export default Router;
