import React from "react";
import QuestionItem from "./QuestionItem";

interface QuestionItemContainerInterface {
	/**
	 * Title of the question
	 */
	title: string;
	/**
	 * Answer to the question
	 */
	text: string;
}

/**
 * Calles the {@link QuestionItem} component
 * @returns JSX
 */
const QuestionItemContainer: React.FC<QuestionItemContainerInterface> = ({
	title,
	text,
}) => {
	return <QuestionItem title={title} text={text} />;
};

export default QuestionItemContainer;
