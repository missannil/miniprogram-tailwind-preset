import { DefineComponent, MainComponent } from "ewm";

const mainComponent = MainComponent({
	properties: {
		isReady: {
			type: Boolean,
			value: true,
		},
	},
	data: {
		colorTheme: "light",
	},
	lifetimes: {
		attached() {
			wx.onThemeChange((res) => {
				this.setData({
					colorTheme: res.theme,
				});
			});
		},
	},
});

const Page = DefineComponent({
	name: "page",
	mainComponent,
});

export type $Page = typeof Page;
