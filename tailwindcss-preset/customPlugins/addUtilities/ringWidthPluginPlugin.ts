import type { PluginCreator } from 'tailwindcss/types/config';
export const ringWidthPlugin: PluginCreator = ({ addUtilities }) => {
	// .ring-20 {
	// 	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
	// 	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(20rpx + var(--tw-ring-offset-width)) var(--tw-ring-color);
	// 	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
	//   }
	addUtilities({
		'.ring-0': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(0rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-1': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-2': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(2rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-4': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(8rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-6': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(12rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-8': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(16px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-10': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(10rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-12': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(12rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-14': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(14rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-16': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(16rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-18': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(18rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-20': {
			"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
			"--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(20rpx + var(--tw-ring-offset-width)) var(--tw-ring-color)",
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		},
		'.ring-inset': {
			'--tw-ring-inset': 'inset',
		},
	});
};
