import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action } from "./component/NewPost.jsx";
import RootLayout, { loader } from "./routes/RootLayout.jsx";
import PostDetails, {
  loader as postGetLoader,
} from "./component/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, loader, element: <App /> },
      { path: "create-post", element: <NewPost />, action: action },
      { path: "/:id", element: <PostDetails />, loader: postGetLoader },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
