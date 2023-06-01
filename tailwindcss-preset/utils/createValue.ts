export const createValue = (configObject: object, preKey: string,valueKey:string) => {
	return Object.fromEntries(
		Object.entries(configObject).map(([key, value]) => [
			`.${preKey}-${key}`,
			{[valueKey]: value },
		])
	);
};
