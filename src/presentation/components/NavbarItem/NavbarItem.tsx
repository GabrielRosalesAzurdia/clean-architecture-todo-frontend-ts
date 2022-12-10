import { NavLink } from "react-router-dom";
import React from "react";

interface NavbarItemInterface {
	link: string;
	name: string;
}

const NavbarItem: React.FC<NavbarItemInterface> = ({ link, name }) => {
	return (
		<li className="mr-10">
			<NavLink
				to={link}
				className={(isActive) =>
					isActive.isActive
						? "text-white font-extrabold underline"
						: "text-white font-extrabold"
				}
			>
				{name}
			</NavLink>
		</li>
	);
};

export default NavbarItem;
