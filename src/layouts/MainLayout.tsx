import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
