import React from "react";
import Navbar from "./Navbar";

interface NavbarContainerInterface {}

/**
 * Calls the {@link Navbar} component
 * @returns JSX
 */
const NavbarContainer: React.FC<NavbarContainerInterface> = () => {
	return (
		<div>
			<Navbar />
		</div>
	);
};

export default NavbarContainer;
