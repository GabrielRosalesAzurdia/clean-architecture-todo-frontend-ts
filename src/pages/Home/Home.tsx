import { ListTDContainer } from "@/presentation/components";
import React from "react";
import { FormTDContainer } from "./presentation/components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	return (
		<section>
			<FormTDContainer />
			<ListTDContainer />
		</section>
	);
};

export default Home;
