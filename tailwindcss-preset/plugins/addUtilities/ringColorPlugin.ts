import type { PluginCreator } from 'tailwindcss/types/config';
export const ringColorPlugin: PluginCreator = ({ addUtilities }) => {
	addUtilities({
		'.ring-0': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-1': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-2': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(2rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-4': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(4rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-6': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(6rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-8': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(8rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-10': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(10rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-12': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(12rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-14': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(14rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-16': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(16rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-18': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(18rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-20': {
			boxShadow:
				'var(--tw-ring-inset) 0 0 0 calc(20rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		},
		'.ring-inset': {
			'--tw-ring-inset': 'inset',
		},
	});
};
// --tw-ring-color: rgba(243, 244, 246, var(--tw-ring-opacity));