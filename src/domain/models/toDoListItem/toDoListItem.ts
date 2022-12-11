/**
 * Structure of an item in the to do list
 */
export interface ToDoListItem {
	/**
	 * The title of the item
	 */
	title: string;
	/**
	 * The description of the item
	 */
	description: string;
	/**
	 * The id of the item, its optinal
	 * @defaultValue `undefined`
	 */
	id?: string;
}
