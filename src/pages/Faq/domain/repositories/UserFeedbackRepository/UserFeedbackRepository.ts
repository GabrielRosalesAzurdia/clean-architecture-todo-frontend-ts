import { Failure } from "@/domain/models";
import { UserFeedback } from "../../models";

/**
 * Contract of the repository used by the {@link UserFeedback}
 */
export interface UserFeedbackRepository {
	/**
	 * Contract of the sendUserFeedback method
	 * @param item - A {@link UserFeedback} to be posted
	 * @returns Either `a json respose from the api` or a {@link Failure}
	 */
	sendUserFeedback(item: UserFeedback): Promise<string | Failure>;
}
