import { Question } from "../Question/Question";

/**
 * Structure of a list of {@link Question}
 */
export interface QuestionList {
	/**
	 * Contains a list of {@link Question}
	 */
	value: Question[];
}