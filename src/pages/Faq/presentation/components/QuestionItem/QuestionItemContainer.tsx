import React from "react";
import QuestionItem from "./QuestionItem";

interface QuestionItemContainerInterface {
	title:string
	text:string
}

const QuestionItemContainer: React.FC<QuestionItemContainerInterface> = ({title,text}) => {
	return <QuestionItem title={title} text={text} />;
};

export default QuestionItemContainer;
