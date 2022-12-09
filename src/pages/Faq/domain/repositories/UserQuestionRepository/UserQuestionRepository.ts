import { UserQuestion } from "../../models";

//* Definition of the repository, what it needs and what will return
export interface UserQuestionRepository {
	sendUserQuestion(item: UserQuestion): string;
}
