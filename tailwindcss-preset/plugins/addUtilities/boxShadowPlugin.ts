import type { PluginCreator } from 'tailwindcss/types/config';
export const boxShadowPlugin: PluginCreator = ({ addComponents }) => {
	addComponents({
		'.shadow-sm': { 'box-shadow': '0 2rpx 4rpx 0 rgb(0 0 0 / 0.05)' },
		'.shadow': {
			'box-shadow':
				'0 2rpx 6rpx 0 rgb(0 0 0 / 0.1), 0 2rpx 4rpx -2rpx rgb(0 0 0 / 0.1)',
		},
		'.shadow-md': {
			'box-shadow':
				'0 8rpx 12rpx -2rpx rgb(0 0 0 / 0.1), 0 4rpx 8rpx -4rpx rgb(0 0 0 / 0.1)',
		},

		'.shadow-lg': {
			'box-shadow':
				'0 20rpx 30rpx -6rpx rgb(0 0 0 / 0.1), 0 8rpx 12rpx -8rpx rgb(0 0 0 / 0.1)',
		},
		'.shadow-xl': {
			'box-shadow':
				'0 40rpx 50rpx -10rpx rgb(0 0 0 / 0.1), 0 16rpx 20rpx -12rpx rgb(0 0 0 / 0.1)',
		},
		'.shadow-2xl': {
			'box-shadow': '0 50rpx 100rpx -24rpx rgb(0 0 0 / 0.25)',
		},
		'.shadow-inner': {
			'box-shadow': 'inset 0 4rpx 8rpx 0 rgb(0 0 0 / 0.05)',
		},
		'.shadow-none': { 'box-shadow': 'none' },
	});
};
