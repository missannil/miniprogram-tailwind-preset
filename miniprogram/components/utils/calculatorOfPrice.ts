import { IsSingleGoods, type Goods } from "../types/Goods";
import { NODISCOUNT } from "./constant";

/**
 * 价格计算模块
 */
class Module_CalculatorOfPrice {
	fixed(num: number, places = 2) {
		return parseFloat(num.toFixed(places));
	}
	/**
	 * 获取商品折扣数
	 */
	getDiscount(goods: Goods) {
		if(IsSingleGoods(goods)) return NODISCOUNT;
		if (goods.currentPrice) {
			return this.fixed(goods.currentPrice * NODISCOUNT / goods.originalPrice, 1);
		}
		return NODISCOUNT;
	}
	/**
	 * 商品当前价格
	 */
	currentPrice(goods: Goods):number {
		if (IsSingleGoods(goods)) {
			return goods.selectedSubGoodsList.reduce((pre,subGoods)=>{
				return pre + this.currentPrice(subGoods) * subGoods.selectedCount;
			},0);
		} else {
			return goods.currentPrice ? goods.currentPrice : goods.originalPrice;
		}
	}
	/**
	 * 商品的原始单价
	 * @param goodsList
	 * @returns 原始总价格
	 */
	originalPrice(goods: Goods): number {
		if (IsSingleGoods(goods)) {
			return this.fixed(goods.selectedSubGoodsList.reduce((price, subGoods) => {
				return price + subGoods.originalPrice * subGoods.selectedCount;
			}, 0));
		} else {
			return goods.originalPrice;
		}
	}
	/**
	 * 商品折扣后单价
	 * @param goods
	 * @returns number
	 */
	// discountPrice(goods: Goods): number {
	// 	if (IsSingleGoods(goods)) {
	// 		return this.fixed(goods.selectedSubGoodsList.reduce((price, subGoods) => {
	// 			return price + this.discountedTotalPrice(subGoods);
	// 		}, 0));
	// 	} else {
	// 		return this.fixed(goods.originalPrice * goods.discount / NODISCOUNT);
	// 	}
	// }
	/**
	 * 商品折扣后总价
	 */
	// discountedTotalPrice(goods: Goods): number {
	// 	return this.fixed(goods.selectedCount * this.discountPrice(goods));
	// }

	/**
	 * 商品列表的原始总价
	 * @param goodsList
	 * @returns
	 */
	originalTotalPriceOfList(goodsList: Goods[]): number {
		return this.fixed(goodsList.reduce((originalPrice, goods) => {
			return originalPrice + this.originalPrice(goods) * goods.selectedCount;
		}, 0));
	}
	/**
	 * 商品列表的则扣后总价
	 * @param goodsList
	 */
	// discountedTotalPriceOfList(goodsList: Goods[]): number {
	// 	return this.fixed(goodsList.reduce((originalPrice, goods) => {
	// 		return originalPrice + this.discountedTotalPrice(goods);
	// 	}, 0));
	// }
	/**
	 * 折扣优惠数
	 */
	// discountedCount(goodsOrList: Goods | Goods[]) {
	// 	return this.fixed(
	// 		Array.isArray(goodsOrList)
	// 			? this.originalTotalPriceOfList(goodsOrList) - this.discountedTotalPriceOfList(goodsOrList)
	// 			: this.originalPrice(goodsOrList) - this.discountedTotalPrice(goodsOrList),
	// 	);
	// }
	/**
	 * 最终价格
	 */
	// finalPrice(goodsList: Goods[]) {
	// 	// 当前最终价格为原始总价减去折扣优惠后的价格
	// 	return this.originalTotalPriceOfList(goodsList) - this.discountedCount(goodsList);
	// }
	static instance = new Module_CalculatorOfPrice();
	static getInstance() {
		return this.instance;
	}
}

export const CalculatorOfPrice = Module_CalculatorOfPrice.getInstance();
