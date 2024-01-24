import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages";
import PostPage from "./pages/post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);
