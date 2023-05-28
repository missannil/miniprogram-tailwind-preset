import type { WMBaseEvent, WMCustomEvent } from "ewm";

/**
 * 事件Dataset类型
 */
export type Dataset<T extends AnyObject> = WMBaseEvent<object, T>;
/**
 * 自定义事件Detail类型
 */
export type Detail<T extends AnyObject> = WMCustomEvent<T>;
export type Icon = `i-${string}`;
export type RPX = `${number}rpx`;
export type PX = `${number}px`;
export type PERCENT = `${number}%`;
export type CALC = `calc${string}`;
/**
 * 尺寸相关 如width height
 */
export type Size = RPX | PX | PERCENT | CALC | "auto";

export type EmptyObj = Record<string, never>;

/**
 * IAPIError 来自 miniprogram-api-typings
 */
// export interface IErrorObj extends IAPIError {
// }

export type CssVar<T extends string = string> = `var(--${T}-${string})`;
export type HEX = `#${string}`;
export type RGBA = `rgba(${number},${number},${number},${number})`;
export type RGB = `rgb(${number},${number},${number})`;
export type TWClass<prefix extends string = string> = `${prefix}-${string}`|'';
export type Color = RGBA | HEX | RGB | CssVar<"color">|"";
export type Position = "fixed" | "absolute" | "relative" | "sticky";
export type Ratio = `${number}:${number}`;

