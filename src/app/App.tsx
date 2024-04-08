import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { CurrentPathProvider } from "../shared/Header/Breadcrumbs/useCurrentPath";

export default function App() {
  return (
    <CurrentPathProvider>
      <ReduxProvider store={store}>
        <RouterProvider router={Router} />
      </ReduxProvider>
    </CurrentPathProvider>
  );
}
