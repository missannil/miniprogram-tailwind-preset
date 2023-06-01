import type { Config } from 'tailwindcss';
import { preset } from './index';
import plugin from 'tailwindcss/plugin';
export default {
	content: [
		'./miniprogram/components/**.*.{wxml,ts}',
		'./miniprogram/pages/**/*.{wxml,ts}',
	],
	presets: [preset],
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				'.common': {
					color: 'var(--text-primary,red)',
					margin: '20rpx auto 0',
					'text-align': 'center',
					'border-width': '1px',
				},
				'.center': {
					display: 'flex',
					'align-items': 'center',
					'justify-content': 'center',
				},
			});
		}),
	],
} satisfies Config;
