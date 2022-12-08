import React, { useState } from "react";
import FormTD from "./FormTD";
import { useAppDispatch } from "@/presentation/redux/hooks";
import { addToDoListItem } from "@/presentation/redux/slices/toDoListSlice";
import { addItemMethod } from "@/presentation/logic";

interface FormTDContainerInterface {}

const FormTDContainer: React.FC<FormTDContainerInterface> = () => {
	const [formValues, setformValues] = useState({ title: "", description: "" });

	const dispatch = useAppDispatch();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		let newToDoListItemFromMethod = addItemMethod(
			e.target.title.value,
			e.target.description.value
		);
		setformValues({ title: "", description: "" });
		dispatch(addToDoListItem(newToDoListItemFromMethod));
	};

	const handleChange = (e: any) => {
		if (e.target.name == "title") {
			setformValues({
				...formValues,
				title: e.target.value,
			});
			return;
		}
		setformValues({
			...formValues,
			description: e.target.value,
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
