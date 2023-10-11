import React from "react";
import "./Footer.css";

const Footer = () => {
	const year = new Date().getFullYear();
	console.log(year);

	return (
		<footer className="Footer">
			<p>C {year} by Summer Robinson</p>
		</footer>
	);
};
export default Footer;
