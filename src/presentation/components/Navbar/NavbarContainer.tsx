import React from "react";
import Navbar from "./Navbar";

interface NavbarContainerInterface {}

const NavbarContainer: React.FC<NavbarContainerInterface> = () => {
	return (
		<div>
			<Navbar />
		</div>
	);
};

export default NavbarContainer;
