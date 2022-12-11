import { Failure } from "@/domain/models";
import { UserFeedback } from "../../models";
import { UserFeedbackRepository } from "../../repositories";

/**
 * Contract of the sendMessage use case for {@link UserFeedback}
 */
export interface sendMessage {
	/**
	 * Cnntract of the sendMessage use case method
	 * @param item - A {@link UserFeedback} to be posted
	 * @return Either `a json respose from the api` or a {@link Failure}
	 */
	sendMessage(item: UserFeedback): Promise<string | Failure>;
}

/**
 * Implementation of the sendMessage use case for {@link UserFeedback}
 */
export class sendMessageImpl implements sendMessage {
	/**
	 * Connection with the repository
	 */
	repository: UserFeedbackRepository;

	/**
	 * Creaetes a sendMessageImpl
	 * @param repository - A repository {@link UserFeedbackRepository}, when used give the
	 * implementation of the repository UserFeedbackRepositoryImpl
	 */
	constructor(repository: UserFeedbackRepository) {
		this.repository = repository;
	}

	/**
	 * Implementation of the sendMessage use case method
	 * @param item - A {@link UserFeedback} to be posted
	 * @return Either `a json respose from the api` or a {@link Failure}
	 */
	sendMessage(item: UserFeedback) {
		return this.repository.sendUserFeedback(item);
	}
}
