interface isActiveNavbarInterace {
	isActive: boolean;
}

export const isActiveNavbar = ({ isActive }: isActiveNavbarInterace) =>
	isActive
		? "text-white font-extrabold underline"
		: "text-white font-extrabold";
