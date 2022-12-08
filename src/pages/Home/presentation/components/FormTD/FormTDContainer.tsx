import React from "react";
import FormTD from "./FormTD";
import { useAppDispatch } from "@/presentation/redux/hooks";
import { addToDoListItem } from "@/presentation/redux/slices/toDoListSlice";
import { addItemMethod } from "@/presentation/logic";

interface FormTDContainerInterface {}

const FormTDContainer: React.FC<FormTDContainerInterface> = () => {
	const dispatch = useAppDispatch();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		let newToDoListItemFromMethod = addItemMethod(
			e.target.tittle.value,
			e.target.description.value
		);
		dispatch(addToDoListItem(newToDoListItemFromMethod));
	};

	return <FormTD handleSubmit={handleSubmit} />;
};

export default FormTDContainer;
