import { Failure } from "@/domain/models";
import { useAppDispatch, useAppSelector } from "@/presentation/redux/hooks";
import {
	turnOffformFAQLoading,
	turnOnformFAQLoading,
} from "@/presentation/redux/slices/loadingSlice";
import React, { useContext, useState } from "react";
import { QuestionContext } from "../../context";
import sendMessagueMethod from "../../logic/userFeedback/userQuestionMethods";
import FormQuestion from "./FormUserFeedback";
import toast from "react-hot-toast";

interface FormQuestionContainerInterface {}

const FormQuestionContainer: React.FC<FormQuestionContainerInterface> = () => {
	const { questionState } = useContext(QuestionContext);

	const [messageField, setmessageField] = useState("");

	const formFAQloadingState = useAppSelector(
		(state) => state.loading.formFAQLoading
	);

	const dipatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		dipatch(turnOnformFAQLoading());
		sendMessagueMethod({
			questionTitle: (
				e.currentTarget.elements.namedItem("title") as HTMLInputElement
			).value,
			message: (
				e.currentTarget.elements.namedItem("message") as HTMLInputElement
			).value,
		}).then((response) => {
			if (response instanceof Failure) {
				toast.error("A failure happened on the feedback form :(");
			}
			setmessageField("");
			dipatch(turnOffformFAQLoading());
			toast.success("Sended! thank you ;)");
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setmessageField(e.target.value);
	};

	return (
		<FormQuestion
			handleSubmit={handleSubmit}
			questionList={questionState}
			messageField={messageField}
			handleChange={handleChange}
			loading={formFAQloadingState}
		/>
	);
};

export default FormQuestionContainer;
