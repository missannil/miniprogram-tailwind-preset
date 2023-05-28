import { DefineComponent, MainComponent,  type PropType } from 'ewm';
import type { Size } from '../types/Alias';
const systemInfo = wx.getSystemInfoSync();
const capsuleInfo = wx.getMenuButtonBoundingClientRect();
const mainComponent = MainComponent({
	properties: {
		classes: {
			type: String,
			value: '',
		},
		/**
		 * 左侧内容是否显示返回按钮
		 * 默认false关闭左侧,开启slot
		 */
		showBack: {
			type: Boolean,
			value: false,
		},
		/**
		 * 中间部分文字 默认字体大小,大于7个溢出打点
		 */
		title: {
			type: String,
			value: '',
		},
		/**
		 * title内容的外部样式入口
		 */
		titleStyle: {
			type: String,
			value: '',
		},
		/**
		 * 左侧间距
		 */
		leftGap: {
			type: String as PropType<Size>,
			value: `${systemInfo.screenWidth - capsuleInfo.right}px`,
		},
		/**
		 * 返回按钮失效时返回的页面url
		 */
		onBackFail: {
			type: String,
			value: '',
		},
	},
	data: {
		statusBarHeight: systemInfo.statusBarHeight,
		customNavHeight:
			capsuleInfo.top + capsuleInfo.bottom - systemInfo.statusBarHeight,
	},
	events: {
		back() {
			wx.navigateBack({
				delta: 1,
				fail: () => {
					if (this.data.onBackFail !=='') {
						void wx.navigateTo({ url: this.data.onBackFail });
					}
				},
			});
		},
	},
	lifetimes:{
		beforeCreate(A){
			console.log(A)
		}
	}
});
const topNav = DefineComponent({
	name: 'topNav',
	mainComponent,
});

export type $TopNav = typeof topNav;
