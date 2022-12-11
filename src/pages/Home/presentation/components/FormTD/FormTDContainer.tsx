import React, { useState } from "react";
import FormTD from "./FormTD";
import { useAppDispatch } from "@/presentation/redux/hooks";
import { addToDoListItem } from "@/presentation/redux/slices/toDoListSlice";
import { addItemMethod } from "@/presentation/logic";
import { Failure } from "@/domain/models";
import {
	turnOffformTDLoading,
	turnOnformTDLoading,
} from "@/presentation/redux/slices/loadingSlice";
import { toast } from "react-hot-toast";

interface FormTDContainerInterface {}

const FormTDContainer: React.FC<FormTDContainerInterface> = () => {
	const [formValues, setformValues] = useState({ title: "", description: "" });

	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		dispatch(turnOnformTDLoading());
		addItemMethod(
			(e.currentTarget.elements.namedItem("title") as HTMLInputElement).value,
			(e.currentTarget.elements.namedItem("description") as HTMLInputElement).value
		).then((response) => {
			if (response instanceof Failure) {
				toast.error("A failure happened on the todo form :(");
				return;
			}
			setformValues({ title: "", description: "" });
			dispatch(addToDoListItem(response));
			dispatch(turnOffformTDLoading());
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setformValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<FormTD
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			title={formValues.title}
			description={formValues.description}
		/>
	);
};

export default FormTDContainer;
