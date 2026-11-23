import { Outlet } from "react-router-dom";
import MainHeader from "../component/MainHeader.jsx";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;

export async function loader() {
  const response = await fetch("http://localhost:3000/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  return resData.posts;
}
