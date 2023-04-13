import { Stack } from "react-bootstrap";
import "../assets/stylesheets/Header.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Header() {
  return (
    <>
      <div className="solar__header__container">
        <div className="solar__header">
          s<i className="bi bi-sun-fill"></i>lar
        </div>
      </div>
      <Stack>
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
}
