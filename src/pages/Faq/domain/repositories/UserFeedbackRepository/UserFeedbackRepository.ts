import { Failure } from "@/domain/models";
import { UserFeedback } from "../../models";

//* Definition of the repository, what it needs and what will return
export interface UserFeedbackRepository {
	sendUserFeedback(item: UserFeedback): Promise<string|Failure>;
}
