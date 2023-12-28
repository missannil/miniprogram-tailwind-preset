import type { PluginCreator } from "tailwindcss/types/config";
export const addComopnents: PluginCreator = ({ addComponents }) => {
  addComponents({
    // '.ellipsis': {
    // 	'white-space': 'nowrap',
    // 	overflow: 'hidden',
    // 	'text-overflow': 'ellipsis',
    // },
  });
};
