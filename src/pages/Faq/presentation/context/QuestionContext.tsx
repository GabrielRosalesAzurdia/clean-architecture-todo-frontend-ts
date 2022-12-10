import { createContext } from "react";
import { QuestionList } from "../../domain/models";

interface QuestionContextProps {
	questionState: QuestionList;
}

export const QuestionContext = createContext<QuestionContextProps>(
	{} as QuestionContextProps
);
