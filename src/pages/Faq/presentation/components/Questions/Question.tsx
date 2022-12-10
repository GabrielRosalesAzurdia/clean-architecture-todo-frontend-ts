import { QuestionList } from "@/pages/Faq/domain/models";
import TitleCardContainer from "@/presentation/components/TitleCard/TitleCardCotainer";
import React from "react";
import { QuestionItem } from "../QuestionItem";

interface QuestionInterface {
	questionList: QuestionList;
}

const Question: React.FC<QuestionInterface> = ({ questionList }) => {
	return (
		<section className="text-center pt-5">
			<TitleCardContainer titleText={"Frequent Asked Questions"} />
			<div>
				{questionList.value.map((element, index) => {
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

export default Question;
