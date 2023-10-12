import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header className="Header">
			<Link className="home-link" to="/">
				<h3>Summer.</h3>
			</Link>
			<Link className="hamburger" onClick={() => setMenuOpen(() => !menuOpen)}>
				<FaBars style={{ fontSize: "25px", margin: "10px" }} />
			</Link>
			<nav className={menuOpen ? "mobile-open" : ""}>
				<NavLink
					className={`nav-link ${({ isActive }) => isActive && "active"}`}
					to="/about"
				>
					About
				</NavLink>
				<NavLink
					className={`nav-link ${({ isActive }) => isActive && "active"}`}
					to="/projects"
				>
					Projects
				</NavLink>
				<NavLink
					className={`nav-link ${({ isActive }) => isActive && "active"}`}
					to="/contact"
				>
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
