//* Error, this is throw be the services, the error can crash the app

export class ServerError extends Error {
	constructor(msg: string) {
		super(msg);
		// Set the prototype explicitly.
		Object.setPrototypeOf(this, ServerError.prototype);
	}
}

export class LocalStorageError extends Error {
	constructor(msg: string) {
		super(msg);
		// Set the prototype explicitly.
		Object.setPrototypeOf(this, LocalStorageError.prototype);
	}
}
