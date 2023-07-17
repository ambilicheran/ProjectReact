import Header from "./Header";
import Post from "./Post";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <Post />
      <Outlet />
    </>
  );
}

export default RootLayout;
