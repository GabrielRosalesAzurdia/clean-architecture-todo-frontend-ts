import getListMethod from "@/presentation/logic/toDoList/toDoListMethods";
import { useAppDispatch, useAppSelector } from "@/presentation/redux/hooks";
import { setToDoList } from "@/presentation/redux/slices/toDoListSlice";
import React, { useEffect } from "react";
import { ListTD } from ".";

interface ListTDContainerInterface {}

const ListTDContainer: React.FC<ListTDContainerInterface> = () => {
	const toDoListState = useAppSelector((state) => state.toDoList.value);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setToDoList(getListMethod()));
		console.log("disparó useEffect");
	}, []);

	const noDataText = "Everything is clear ; )";

	return <ListTD toDoList={toDoListState} noDataText={noDataText} />;
};

export default ListTDContainer;
