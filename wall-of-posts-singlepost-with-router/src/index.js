import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./routes/RootLayout";
import NewPost from "./routes/NewPost";
import Modal from "./routes/Modal";
import Post from "./routes/Post";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/create-post",
        element: (
          <Modal>
            <NewPost />
          </Modal>
        ),
      },
      {
        path: "/:post",
        element: <Post />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
