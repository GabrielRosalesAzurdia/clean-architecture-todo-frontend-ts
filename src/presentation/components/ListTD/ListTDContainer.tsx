import { Failure } from "@/domain/models";
import getListMethod from "@/presentation/logic/toDoList/toDoListMethods";
import { useAppDispatch, useAppSelector } from "@/presentation/redux/hooks";
import {
	turnOffformTDLoading,
	turnOnformTDLoading,
} from "@/presentation/redux/slices/loadingSlice";
import { setToDoList } from "@/presentation/redux/slices/toDoListSlice";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { ListTD } from ".";

interface ListTDContainerInterface {}

const ListTDContainer: React.FC<ListTDContainerInterface> = () => {
	const toDoListState = useAppSelector((state) => state.toDoList.value);
	const loadingState = useAppSelector((state) => state.loading.formTDLoading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(turnOnformTDLoading());
		getListMethod().then((response) => {
			if (response instanceof Failure) {
				toast.error("A failure happened on the list :(");
				return;
			}
			dispatch(setToDoList(response.value));
			dispatch(turnOffformTDLoading());
		});
	}, []);

	const noDataText = "Everything is clear ; )";

	return (
		<ListTD
			toDoList={toDoListState}
			noDataText={noDataText}
			loading={loadingState}
		/>
	);
};

export default ListTDContainer;
