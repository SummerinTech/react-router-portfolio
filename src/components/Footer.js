import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	const year = new Date().getFullYear();
	console.log(year);

	return (
		<footer className="Footer">
			<p>
				<Link
					className="open-source"
					to="https://github.com/SummerinTech/react-router-portfolio"
					target="_blank"
				>
					Open-Source Code
				</Link>{" "}
				<span className="author-credits">by Summer Robinson</span> | {year}
			</p>
		</footer>
	);
};
export default Footer;
