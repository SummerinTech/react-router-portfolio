import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="Header">
			<Link className="home-link" to="/">
				<h3>Summer.</h3>
			</Link>
			<nav>
				<NavLink className="nav-link" to="/about">
					About
				</NavLink>
				<NavLink className="nav-link" to="/projects">
					Projects
				</NavLink>
				<NavLink className="nav-link" to="/contact">
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
