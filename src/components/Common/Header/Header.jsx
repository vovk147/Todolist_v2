import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { FaHome, FaListAlt, FaTrashAlt, FaCog } from "react-icons/fa"; // Import Font Awesome icons

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">Todo list</div>
          <nav className="header__nav">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "nav_active" : ""}`}>
              <FaHome className="icon" />
              <span className="link-text">Home</span>
            </Link>
            <Link to="/todo" className={`nav-link ${location.pathname === "/todo" ? "nav_active" : ""}`}>
              <FaListAlt className="icon" />
              <span className="link-text">Todo</span>
            </Link>
            <Link to="/trash-bin" className={`nav-link ${location.pathname === "/trash-bin" ? "nav_active" : ""}`}>
              <FaTrashAlt className="icon" />
              <span className="link-text">Trash bin</span>
            </Link>
            <Link to="/settings" className={`nav-link ${location.pathname === "/settings" ? "nav_active" : ""}`}>
              <FaCog className="icon" />
              <span className="link-text">Settings</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

