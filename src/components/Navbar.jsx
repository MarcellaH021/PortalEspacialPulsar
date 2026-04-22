import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHeart, FaRocket } from "react-icons/fa";
import "./Navbar.scss";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <FaRocket />
        <span>PortalPulsar</span>
      </div>

      <div className="links">
        <Link className={pathname === "/" ? "active" : ""} to="/">
          <FaHome /> Início
        </Link>

        <Link
          className={pathname === "/favoritos" ? "active" : ""}
          to="/favoritos"
        >
          <FaHeart /> Favoritos
        </Link>
      </div>
    </nav>
  );
}