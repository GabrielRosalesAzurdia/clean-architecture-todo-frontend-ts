import React from "react";

interface ListTDItemInterface {
	title: string;
	description: string;
	id: string;
	handleClick(id: string): void;
}

const ListTDItem: React.FC<ListTDItemInterface> = ({
	title,
	description,
	id,
	handleClick,
}) => {
	return (
		<div className="flex justify-center pb-6">
			<div className="w-full max-w-xs block bg-white hover:bg-gray-100 text-left p-4">
				<h2 className="font-bold">{title.toUpperCase()}</h2>
				<hr />
				<p className="pt-1 font-normal">{description}</p>
				<button
					className="pt-1 underline"
					onClick={() => {
						handleClick(id);
					}}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ListTDItem;
