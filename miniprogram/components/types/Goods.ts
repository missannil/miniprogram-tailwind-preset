import type {  SingleGoods, StandardGoods, SubGoods } from "../../../CloudBase/Schemas/Goods";

export type Goods = SingleGoods | StandardGoods | SubGoods;

export function IsSingleGoods(goods: Goods): goods is SingleGoods {
	return goods.type === "SingleGoods";
}
export function IsStandardGoods(goods: Goods): goods is StandardGoods {
	return goods.type === "StandardGoods";
}
export function IsSubGoods(goods: Goods): goods is SubGoods {
	return goods.type === "SubGoods";
}

export type GoodsStatus = "normal" | "removed" | "subErr" | "underFloorPrice" | "soldOut" | "underStock" | "overStock";
export const ChineseGoodsStatus: Record<GoodsStatus, string> = {
	normal: "正常",
	removed: "已下架",
	subErr: "子商品错误",
	underFloorPrice: "低于起始价",
	soldOut: "售罄",
	underStock: "库存不足",
	overStock: "库存溢出",
};
export {};
