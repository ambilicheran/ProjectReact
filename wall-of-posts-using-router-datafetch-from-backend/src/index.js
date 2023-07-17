import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./routes/RootLayout";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import Modal from "./routes/Modal";
import Post, { loader as postsLoader } from "./routes/Post";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Post />} loader={postsLoader}>
          <Route
            path="/create-post"
            element={
              <>
                <Modal>
                  <NewPost />
                </Modal>
              </>
            }
            action={newPostAction}
          />
        </Route>
      </Route>
    </Route>
  )
);

/*
      <Route
          path="/create-post"
          element={
            <Modal>
              <NewPost />
            </Modal>
          }
          action={newPostAction}
        />
  */

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Post />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: (
              <>
                <Modal>
                  <NewPost />
                </Modal>
              </>
            ),
            action: newPostAction,
                       children: [
              {
                path: "/",
                element: <Post />,
                loader: postsLoader,
              },
            ],      
          },
        ],
      },
    ],
  },
]);*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
