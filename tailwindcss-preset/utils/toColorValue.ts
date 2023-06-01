export function toColorValue(maybeFunction: any) {
	return typeof maybeFunction === 'function'
		? maybeFunction({})
		: maybeFunction;
}
