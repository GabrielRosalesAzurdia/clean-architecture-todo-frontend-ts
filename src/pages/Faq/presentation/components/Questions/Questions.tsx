import { Question } from "@/pages/Faq/domain/models";
import TitleCardContainer from "@/presentation/components/TitleCard/TitleCardCotainer";
import React from "react";
import { QuestionItem } from "../QuestionItem";

interface QuestionsInterface {
	/**
	 * List of {@link Question}
	 */
	questionList: Question[];
}

/**
 * Creates the list of frequent asked questions with style classes and mapping
 * @returns JSX
 */
const Questions: React.FC<QuestionsInterface> = ({ questionList }) => {
	return (
		<section className="text-center pt-5">
			<TitleCardContainer titleText={"Frequent Asked Questions"} />
			<div>
				{questionList.map((element, index) => {
					return (
						<QuestionItem
							key={index}
							title={element.title}
							text={element.text}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Questions;
