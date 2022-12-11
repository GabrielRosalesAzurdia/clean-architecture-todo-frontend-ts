import React from "react";
import NavbarItem from "./NavbarItem";

interface NavbarItemContainerInterface {
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
 * Calls the {@link NavbarItem} component
 * @returns JSX
 */
const NavbarItemContainer: React.FC<NavbarItemContainerInterface> = ({
	link,
	name,
}) => {
	return <NavbarItem link={link} name={name} />;
};

export default NavbarItemContainer;
