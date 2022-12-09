import { UserQuestion } from "../../models";
import { UserQuestionRepository } from "../../repositories";

//* Definition of the UseCase, what it needs and what will return
export interface UserQuestionUseCases {
	sendMessage(item: UserQuestion): string;
}

//* Implementation of the UseCase Using the Repository
export class UserQuestionUseCasesImpl implements UserQuestionUseCases {
	repository: UserQuestionRepository;

	constructor(repository: UserQuestionRepository) {
		this.repository = repository;
	}

	sendMessage(item: UserQuestion) {
		return this.repository.sendUserQuestion(item);
	}
}
