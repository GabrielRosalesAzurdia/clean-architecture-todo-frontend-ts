import React, { useContext } from "react";
import { QuestionContext } from "../../context";
import Question from "./Question";

interface QuestionContainerInterface {}

/**
 * Manages state, calls the {@link Question} component
 * @returns JSX
 */
const QuestionContainer: React.FC<QuestionContainerInterface> = () => {
	const { questionState } = useContext(QuestionContext);
	return <Question questionList={questionState.value} />;
};

export default QuestionContainer;
