import React, { useContext } from "react";
import { QuestionContext } from "../../context";
import Question from "./Question";

interface QuestionContainerInterface {}

const QuestionContainer: React.FC<QuestionContainerInterface> = () => {
	const { questionState } = useContext(QuestionContext);
	return <Question questionList={questionState}/>;
};

export default QuestionContainer;
