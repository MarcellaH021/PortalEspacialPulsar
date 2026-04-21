import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link> |{" "}
      <Link to="/favoritos">Favoritos</Link>
    </div>
  );
}