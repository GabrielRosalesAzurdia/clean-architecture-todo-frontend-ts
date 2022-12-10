import { Failure } from "@/domain/models";
import { UserFeedbackRepositoryImpl } from "@/pages/Faq/data/repositories/UserFeedbackRepositoryImpl/UserFeedbackRepositoryImpl";
import { UserFeedback } from "@/pages/Faq/domain/models";
import { sendMessageImpl } from "@/pages/Faq/domain/useCases";

async function sendMessagueMethod(
	item: UserFeedback
): Promise<string | Failure> {
	let userFeedbackRepository = new UserFeedbackRepositoryImpl();
	let toDoListUsecase = new sendMessageImpl(userFeedbackRepository);
	let response = await toDoListUsecase.sendMessage(item);
	return response;
}

export default sendMessagueMethod;
