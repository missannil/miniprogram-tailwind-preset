import type { PluginCreator } from 'tailwindcss/types/config';

export const addBase: PluginCreator = ({ addBase }) => {
	addBase({
		page: {
			width: '100%',
			height: '100%',
			'line-height': '1.25',
			'box-sizing': 'border-box',
			'text-size-adjust': '100%',
			'font-family': `"fontFamily.sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
			'--tw-translate-x': '0',
			'--tw-translate-y': '0',
			'--tw-rotate': '0',
			'--tw-skew-x': '0',
			'--tw-skew-y': '0',
			'--tw-scale-x': '1',
			'--tw-scale-y': '1',
			'--tw-gradient-from-position': '',
			'--tw-gradient-via-position': '',
			'--tw-gradient-to-position': '',
			'--tw-ring-inset': '',
			'--tw-ring-offset-width': '0px',
			'--tw-ring-offset-color': '#fff',
			'--tw-ring-color': 'rgb(59 130 246 / 0.5)',
			'--tw-ring-offset-shadow': '0 0 #0000',
			'--tw-ring-shadow': '0 0 #0000',
			'--tw-shadow': '0 0 #0000',
			'--tw-shadow-colored': '0 0 #0000',
			'--tw-ordinal': '',
			'--tw-slashed-zero': '',
			'--tw-numeric-figure': '',
			'--tw-numeric-spacing': '',
			'--tw-numeric-fraction': '',
			'--tw-blur': '',
			'--tw-brightness': '',
			'--tw-contrast': '',
			'--tw-grayscale': '',
			'--tw-hue-rotate': '',
			'--tw-invert': '',
			'--tw-saturate': '',
			'--tw-sepia': '',
			'--tw-drop-shadow': '',
			'--tw-backdrop-blur': '',
			'--tw-backdrop-brightness': '',
			'--tw-backdrop-contrast': '',
			'--tw-backdrop-grayscale': '',
			'--tw-backdrop-hue-rotate': '',
			'--tw-backdrop-invert': '',
			'--tw-backdrop-opacity': '',
			'--tw-backdrop-saturate': '',
			'--tw-backdrop-sepia': '',
			'padding ': `constant(safe-area-inset-top, 0px)
			             constant(safe-area-inset-right, 0px)
			             constant(safe-area-inset-bottom, 0px)
			             constant(safe-area-inset-left, 0px)`,
			padding: `env(safe-area-inset-top, 0px)
		              env(safe-area-inset-right, 0px)
			          env(safe-area-inset-bottom, 0px)
		              env(safe-area-inset-left, 0px)`,
		},

		'page,view,[class],image,i,icon,text,::before,::after': {
			'box-sizing': 'border-box',
			'border-width': '0',
			'border-style': 'solid',
			'border-color': 'currentColor',
		},
	});
};
