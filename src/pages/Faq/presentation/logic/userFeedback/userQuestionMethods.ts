import { Failure } from "@/domain/models";
import { UserFeedbackRepositoryImpl } from "@/pages/Faq/data/repositories";
import { UserFeedback } from "@/pages/Faq/domain/models";
import { sendMessageImpl } from "@/pages/Faq/domain/useCases";

/**
 * sendMessage instance
 * Creates an instance of the {@link sendMessageImpl} use case
 * @param item - A {@link UserFeedback} to be posted
 * @returns Either `a json respose from the api` or a ServerFailure
 */
async function sendMessagueMethod(
	item: UserFeedback
): Promise<string | Failure> {
	let userFeedbackRepository = new UserFeedbackRepositoryImpl();
	let toDoListUsecase = new sendMessageImpl(userFeedbackRepository);
	let response = await toDoListUsecase.sendMessage(item);
	return response;
}

export default sendMessagueMethod;
