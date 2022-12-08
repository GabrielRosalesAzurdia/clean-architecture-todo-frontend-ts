import { ListTDContainer } from "@/presentation/components";
import React from "react";
import { FormQuestionContainer, QuestionContainer } from "./presentation";

export interface FaqInterface {}

const Faq: React.FC<FaqInterface> = () => {
	return (
		<section className="flex flex-wrap p-4">
			<div className="w-full sm:w-1/2 bg-gray-400">
				<QuestionContainer />
			</div>
			<div
				className="w-full sm:w-1/2 overflow-hidden"
				style={{ maxHeight: "23rem" }}
			>
				<ListTDContainer />
			</div>
			<div className="w-full bg-blue-500">
				<FormQuestionContainer />
			</div>
		</section>
	);
};

export default Faq;
