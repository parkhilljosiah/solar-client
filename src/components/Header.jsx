import { Stack } from "react-bootstrap";
import "../assets/stylesheets/Header.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Header() {
  return (
    <>
      <div className="solar__header__container">
        <div className="solar__header">
          solar
        </div>
      </div>
      <Stack>
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
}
