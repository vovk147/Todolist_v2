import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	const location = useLocation(); 

	return (
		<header>
			<div className="container">
				<div className="header__wrapper">
					<div className="header__logo">Todo list</div>
					<nav className="header__nav">
						<Link to="/" className={`nav-link ${location.pathname === "/" ? "nav_active" : ""}`}>
							Home
						</Link>
						<Link to="/todo" className={`nav-link ${location.pathname === "/todo" ? "nav_active" : ""}`}>
							Todo
						</Link>
						<Link to="/trash-bin" className={`nav-link ${location.pathname === "/trash-bin" ? "nav_active" : ""}`}>
							Trash bin
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
