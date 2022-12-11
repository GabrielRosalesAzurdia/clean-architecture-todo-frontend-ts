import React from "react";

interface QuestionItemInterface {
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
 * Creates an question for the frequent asked questions with style classes
 * @returns JSX
 */
const QuestionItem: React.FC<QuestionItemInterface> = ({ title, text }) => {
	return (
		<div className="shadow-lg p-5 text-left">
			<h3 className="font-bold text-base">{title}</h3>
			<br />
			<p>{text}</p>
		</div>
	);
};

export default QuestionItem;
