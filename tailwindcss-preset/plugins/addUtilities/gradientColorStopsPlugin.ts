import type { PluginCreator } from 'tailwindcss/types/config';
import { flattenColorPalette } from '../../utils/flattenColorPalette';

export const gradientColorStopsPlugin: PluginCreator = ({
	matchUtilities,
	theme,
}) => {

	let options: any = {
		values: flattenColorPalette(
			theme('removeAddDefaultsgradientColorStops')
		),
		type: ['color', 'any'],
	};
	let positionOptions: any = {
		values: theme('gradientColorStopPositions'),
		type: ['length', 'percentage'],
	};
	matchUtilities({
		from: (value) => {
            return {
            //   '@defaults gradient-color-stops': {},
              '--tw-gradient-from': `${value} var(--tw-gradient-from-position)`,
              '--tw-gradient-to': `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
              '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to)`,
            }
		},
		
	},options);
	matchUtilities(
		{
			from: (value) => {
				return {
					'--tw-gradient-from-position': value,
				};
			},
		},
		positionOptions
	);
	matchUtilities(
		{
			via: (value) => {
				return {
					'--tw-gradient-to': `${value}  var(--tw-gradient-to-position)`,
					'--tw-gradient-stops': `var(--tw-gradient-from), ${value} var(--tw-gradient-via-position), var(--tw-gradient-to)`,
				};
			},
		},
		options
	);
	matchUtilities(
		{
			via: (value) => {
				return {
					'--tw-gradient-via-position': value,
				};
			},
		},
		positionOptions
	);
	matchUtilities(
		{
			to: (value) => {
				return {
					'--tw-gradient-to': `${value} var(--tw-gradient-to-position)`,
				};
			},
		},
		options
	);
	matchUtilities(
		{
			to: (value) => {
				return {
					'--tw-gradient-to-position': value,
				};
			},
		},
		positionOptions
	);
};
