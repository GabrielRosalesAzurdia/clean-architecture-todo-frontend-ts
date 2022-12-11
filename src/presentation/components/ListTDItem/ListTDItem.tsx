import React from "react";

interface ListTDItemInterface {
	/**
	 * Title of the to do list item
	 */
	title: string;
	/**
	 * Description of the to do list item
	 */
	description: string;
	/**
	 * Id of the to do list item
	 */
	id: string;
	/**
	 * Handles the delete button
	 * @param id - Id of the item to delete
	 */
	handleClick(id: string): void;
}

/**
 * Shows an item from the to do list
 * @returns JSX
 */
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
