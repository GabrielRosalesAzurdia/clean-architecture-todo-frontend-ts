import { Failure } from "@/domain/models";
import { useAppDispatch, useAppSelector } from "@/presentation/redux/hooks";
import {
	turnOffformFAQLoading,
	turnOnformFAQLoading,
} from "@/presentation/redux/slices/loadingSlice";
import React, { useContext, useState } from "react";
import { QuestionContext } from "../../context";
import sendMessagueMethod from "../../logic/userFeedback/userQuestionMethods";
import FormQuestion from "./FormQuestion";

interface FormQuestionContainerInterface {}

const FormQuestionContainer: React.FC<FormQuestionContainerInterface> = () => {
	const { questionState } = useContext(QuestionContext);

	const [messageField, setmessageField] = useState("");

	const formFAQloadingState = useAppSelector(
		(state) => state.loading.formFAQLoading
	);

	const dipatch = useAppDispatch();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		dipatch(turnOnformFAQLoading());
		sendMessagueMethod({
			questionTitle: e.target.title.value,
			message: e.target.message.value,
		}).then((response) => {
			if (response instanceof Failure) {
				console.log("hubo failure");
			}
			setmessageField("");
			console.log("enviado");
			dipatch(turnOffformFAQLoading());
		});
	};

	const handleChange = (e: any) => {
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
