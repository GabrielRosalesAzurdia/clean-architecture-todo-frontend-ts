//* Errors, these are throw be the services, the errors can crash the app
//* and are supossed to be catch be the repository

/**
 * 	Represents a Server Error
 *  @extends Error
 */
export class ServerError extends Error {
	/**
	 * 	Creates a ServerError
	 *	@param msg - Message to show in the error
	 */
	constructor(msg: string) {
		super(msg);
		// Set the prototype explicitly.
		Object.setPrototypeOf(this, ServerError.prototype);
	}
}

/**
 * 	Represents a Local Storage Error
 * 	@extends Error
 */
export class LocalStorageError extends Error {
	/**
	 * 	Creates a LocalStorageError
	 *	@param msg - Message to show in the error
	 */
	constructor(msg: string) {
		super(msg);
		// Set the prototype explicitly.
		Object.setPrototypeOf(this, LocalStorageError.prototype);
	}
}
