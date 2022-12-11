import { Failure, ServerFailure } from "@/domain/models";
import { UserFeedback } from "@/pages/Faq/domain/models";
import { UserFeedbackRepository } from "@/pages/Faq/domain/repositories";
import { postUserFeedbackApi } from "../../services";

/**
 * Implementation of the repository used by the {@link UserFeedback}
 */
export class UserFeedbackRepositoryImpl implements UserFeedbackRepository {
	/**
	 * Implementation of the sendUserFeedback method
	 * @param item - A {@link UserFeedback} to be posted
	 * @returns Either `a json respose from the api` or a {@link ServerFailure}
	 */
	async sendUserFeedback(item: UserFeedback): Promise<string | Failure> {
		try {
			let response = await postUserFeedbackApi(item);
			return response;
		} catch (e) {
			return new ServerFailure();
		}
	}
}
