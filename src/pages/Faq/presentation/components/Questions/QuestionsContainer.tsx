import React, { useContext } from "react";
import { QuestionContext } from "../../context";
import Questions from "./Questions";

interface QuestionsContainerInterface {}

/**
 * Manages state, calls the {@link Question} component
 * @returns JSX
 */
const QuestionsContainer: React.FC<QuestionsContainerInterface> = () => {
	const { questionState } = useContext(QuestionContext);
	return <Questions questionList={questionState.value} />;
};

export default QuestionsContainer;
