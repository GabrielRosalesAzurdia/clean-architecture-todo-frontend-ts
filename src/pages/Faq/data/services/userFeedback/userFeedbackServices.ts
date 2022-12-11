//* Services used by the UseFeedback
import { ServerError } from "@/domain/models";
import { UserFeedback } from "@/pages/Faq/domain/models";

/**
 * Posts a user feedback to the api
 * @param feedback - A {@link UserFeedback} to be posted
 * @returns A json respose from the api`
 *
 * @throws {@link ServerError}
 * This error happens if the api fails
 */ export async function postUserFeedbackApi(
	feedback: UserFeedback
): Promise<string> {
	return mockBackendPostUserFeedback(feedback)
		.then((response) => {
			return response;
		})
		.catch((e) => {
			throw new ServerError("Fallo la api en postUserFeedbackApi");
		});
}

//? Functionality created in replacement of the API is going to be removed
const mockBackendPostUserFeedback = (
	feedback: UserFeedback
): Promise<string> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("{success:204}");
		}, 2000);
	});
};
