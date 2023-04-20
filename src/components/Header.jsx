import { Stack } from "react-bootstrap";
import "../assets/stylesheets/Header.css";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="solar__header__container">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="solar__header"
        >
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
