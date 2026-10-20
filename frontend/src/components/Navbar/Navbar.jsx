import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../pages/contexts/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { handleLogout } = useContext(AuthContext);

  return (
    <header className="navbar">
      <nav className="container navbar-content" aria-label="Main navigation">
        <Link className="navbar-brand" to="/feed">
          Auth Lab
        </Link>
        <div className="navbar-links">
          <NavLink to="/feed">Feed</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        {/* TODO: implementar logout durante os estudos. */}
        <button
          className="button button-secondary"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
