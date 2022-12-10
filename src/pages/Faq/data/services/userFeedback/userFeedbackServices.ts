import { ServerError } from "@/domain/models";
import { UserFeedback } from "@/pages/Faq/domain/models";

//* Post the data to the api
export async function postUserFeedbackApi(
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
