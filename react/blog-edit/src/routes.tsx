import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages";
import PostPage from "./pages/post";
import NavBarComponent from "./components/navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavBarComponent>
        <RootPage />
      </NavBarComponent>
    ),
  },
  {
    path: "/post/:id",
    element: (
      <NavBarComponent>
        <PostPage />
      </NavBarComponent>
    ),
  },
]);
