//* Failures, use when dealing with errors at the repository

export class Failure {}

// General Failures

export class ServerFailure implements Failure {}

export class LocaLStorageFailure implements Failure {}
