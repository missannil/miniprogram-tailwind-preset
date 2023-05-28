import type { EmptyObj } from "./Alias";

export function isEmptyObj(obj: object): obj is EmptyObj {
	return Reflect.ownKeys(obj).length === 0;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isErrorObj(p: any): p is IAPIError {
	return typeof p.errMsg === "string";
}
