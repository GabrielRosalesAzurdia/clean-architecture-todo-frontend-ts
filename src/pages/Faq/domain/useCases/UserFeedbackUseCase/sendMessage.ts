import { Failure } from "@/domain/models";
import { UserFeedback } from "../../models";
import { UserFeedbackRepository } from "../../repositories";

export interface sendMessage {
	sendMessage(item: UserFeedback): Promise<string | Failure>;
}

export class sendMessageImpl implements sendMessage {
	repository: UserFeedbackRepository;

	constructor(repository: UserFeedbackRepository) {
		this.repository = repository;
	}

	sendMessage(item: UserFeedback) {
		return this.repository.sendUserFeedback(item);
	}
}
