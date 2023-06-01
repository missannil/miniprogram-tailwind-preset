type RGB = `rgb(${number} ${number} ${number})`;
export const parseRGB = function (str: RGB) {
	const match = str.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
	if (match) {
		return `${match[1]}, ${match[2]}, ${match[3]}`;
	} else {
		throw Error('要求颜色为rgb');
	}
};
