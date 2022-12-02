import { NavLink } from "react-router-dom";
import React from "react";
import { isActiveNavbar } from "@/presentation/logic/NavbarItem/isActiveNavbar";

interface NavbarItemInterface {
	link: string;
	name: string;
}

const NavbarItem: React.FC<NavbarItemInterface> = ({ link, name }) => {
	return (
		<li className="mr-10">
			<NavLink to={link} className={isActiveNavbar}>
				{name}
			</NavLink>
		</li>
	);
};

export default NavbarItem;
