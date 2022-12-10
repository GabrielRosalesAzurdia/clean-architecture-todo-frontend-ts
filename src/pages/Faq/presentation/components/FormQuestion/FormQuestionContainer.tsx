import { Failure } from "@/domain/models";
import React, { useContext } from "react";
import { QuestionContext } from "../../context";
import sendMessagueMethod from "../../logic/userFeedback/userQuestionMethods";
import FormQuestion from "./FormQuestion";

interface FormQuestionContainerInterface {}

const FormQuestionContainer: React.FC<FormQuestionContainerInterface> = () => {

	const { questionState } = useContext(QuestionContext);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		sendMessagueMethod({
			questionTitle: e.target.title.value,
			message: e.target.message.value,
		}).then((response) => {
			if (response instanceof Failure) {
				console.log("hubo failure");
			}
			console.log("enviado");
		});
	};

	return <FormQuestion handleSubmit={handleSubmit} questionList={questionState} />;
};

export default FormQuestionContainer;
