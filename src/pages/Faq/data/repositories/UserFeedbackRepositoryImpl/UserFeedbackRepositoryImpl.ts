import { Failure, ServerFailure } from "@/domain/models";
import { UserFeedback } from "@/pages/Faq/domain/models";
import { UserFeedbackRepository } from "@/pages/Faq/domain/repositories";
import { postUserFeedbackApi } from "../../services";

export class UserFeedbackRepositoryImpl implements UserFeedbackRepository {
	async sendUserFeedback(item: UserFeedback): Promise<string | Failure> {
		try {
			let response = await postUserFeedbackApi(item);
			return response;
		} catch (e) {
			return new ServerFailure();
		}
	}
}
