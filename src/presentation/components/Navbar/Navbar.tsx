import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";

interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
	return (
		<ul className="flex items-center p-6 bg-sky-500">
			<NavbarItem link="/home" name="Home" />
			<NavbarItem link="/faq" name="FAQ" />
		</ul>
	);
};

export default Navbar;
