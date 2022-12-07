import React from "react";
import FormTD from "./FormTD";
import { useAppDispatch } from "@/presentation/redux/hooks";
import {
	addToDoList,
	setToDoList,
} from "@/presentation/redux/slices/toDoListSlice";
import { addItemMethod } from "@/presentation/logic";
import getListMethod from "@/presentation/logic/toDoList/toDoListMethods";

interface FormTDContainerInterface {}

const FormTDContainer: React.FC<FormTDContainerInterface> = () => {
	const dispatch = useAppDispatch();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		addItemMethod(e.target.tittle.value, e.target.description.value);
		dispatch(setToDoList(getListMethod()));
	};

	return <FormTD handleSubmit={handleSubmit} />;
};

export default FormTDContainer;
