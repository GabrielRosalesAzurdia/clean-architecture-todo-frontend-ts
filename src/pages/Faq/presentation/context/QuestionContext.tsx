import { createContext } from "react";
import { QuestionList } from "../../domain/models";

interface QuestionContextProps {
	/**
	 * Structure implementing Questionlist, holds the questions
	 */
	questionState: QuestionList;
}

export const QuestionContext = createContext<QuestionContextProps>(
	{} as QuestionContextProps
);
