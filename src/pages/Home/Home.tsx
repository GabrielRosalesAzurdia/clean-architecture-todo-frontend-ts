import { ListTDContainer } from "@/presentation/components";
import React from "react";
import { FormTDContainer } from "./presentation";

export interface HomeInterface {}

/**
 * Home page
 * Uses the {@link FormTDContainer} and {@link ListTDContainer} components
 */
const Home: React.FC<HomeInterface> = () => {
	return (
		<section>
			<FormTDContainer />
			<ListTDContainer />
		</section>
	);
};

export default Home;
