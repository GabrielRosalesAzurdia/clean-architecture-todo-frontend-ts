import React from "react";
import NavbarItem from "./NavbarItem";

interface NavbarItemContainerInterface {
	link: string;
	name: string;
}

const NavbarItemContainer: React.FC<NavbarItemContainerInterface> = ({
	link,
	name,
}) => {
	return <NavbarItem link={link} name={name} />;
};

export default NavbarItemContainer;
