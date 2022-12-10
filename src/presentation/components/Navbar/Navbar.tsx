import React from "react";
import NavbarItemContainer from "../NavbarItem/NavbarItemContainer";

interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
	return (
		<ul className="flex items-center p-6 bg-sky-500">
			<NavbarItemContainer link="/home" name="Home" />
			<NavbarItemContainer link="/faq" name="FAQ" />
		</ul>
	);
};

export default Navbar;
