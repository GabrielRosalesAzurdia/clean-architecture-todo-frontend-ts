import { ListTD } from "@/presentation/components";
import React from "react";
import { FormTD } from "./presentation/components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	return (
		<section>
			<FormTD />
			<ListTD />
		</section>
	);
};

export default Home;
