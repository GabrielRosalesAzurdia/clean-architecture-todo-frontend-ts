import { ListTDContainer } from "@/presentation/components";
import React from "react";
import { FormQuestionContainer, QuestionContainer } from "./presentation";
import { QuestionProvider } from "./presentation/context";

export interface FaqInterface {}

/**
 * FAQ page
 * Uses the {@link QuestionProvider} context
 * Uses the {@link QuestionContainer}, {@link ListTDContainer} and {@link FormQuestionContainer} components
 */
const Faq: React.FC<FaqInterface> = () => {
	return (
		<QuestionProvider>
			<section className="flex flex-wrap p-4">
				<div
					className="w-full sm:w-1/2 overflow-y-scroll"
					style={{ maxHeight: "40rem", height: "40rem" }}
				>
					<QuestionContainer />
				</div>
				<div
					className="w-full sm:w-1/2 overflow-y-scroll"
					style={{ maxHeight: "40rem", height: "40rem" }}
				>
					<ListTDContainer />
				</div>
				<div className="w-full">
					<FormQuestionContainer />
				</div>
			</section>
		</QuestionProvider>
	);
};

export default Faq;
