import { NavLink } from "react-router-dom";
import React from "react";

interface NavbarItemInterface {
	/**
	 * Link that wants to be used
	 */
	link: string;
	/**
	 * Name to show in the hypertext
	 */
	name: string;
}

/**
 * Creates a Navlink with style classes and isActive implementation
 * @returns JSX
 */
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
