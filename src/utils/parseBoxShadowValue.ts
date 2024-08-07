import { splitAtTopLevelOnly } from "./splitAtTopLevelOnly";

let KEYWORDS = new Set(["inset", "inherit", "initial", "revert", "unset"]);
let SPACE = /\ +(?![^(]*\))/g; // Similar to the one above, but with spaces instead.
let LENGTH = /^-?(\d+|\.\d+)(.*?)$/g;
// @ts-ignore
export function parseBoxShadowValue(input) {
  let shadows = splitAtTopLevelOnly(input, ",");
  return shadows.map((shadow) => {
    let value = shadow.trim();
    let result = { raw: value };
    let parts = value.split(SPACE);
    let seen = new Set();

    for (let part of parts) {
      // Reset index, since the regex is stateful.
      LENGTH.lastIndex = 0;

      // Keyword
      if (!seen.has("KEYWORD") && KEYWORDS.has(part)) {
        // @ts-ignore
        result.keyword = part;
        seen.add("KEYWORD");
      } // Length value
      else if (LENGTH.test(part)) {
        if (!seen.has("X")) {
          // @ts-ignore
          result.x = part;
          seen.add("X");
        } else if (!seen.has("Y")) {
          // @ts-ignore
          result.y = part;
          seen.add("Y");
        } else if (!seen.has("BLUR")) {
          // @ts-ignore
          result.blur = part;
          seen.add("BLUR");
        } else if (!seen.has("SPREAD")) {
          // @ts-ignore
          result.spread = part;
          seen.add("SPREAD");
        }
      } // Color or unknown
      else {
        // @ts-ignore
        if (!result.color) {
          // @ts-ignore
          result.color = part;
        } else {
          // @ts-ignore
          if (!result.unknown) result.unknown = [];
          // @ts-ignore
          result.unknown.push(part);
        }
      }
    }

    // Check if valid
    // @ts-ignore
    result.valid = result.x !== undefined && result.y !== undefined;

    return result;
  });
}
// @ts-ignore
export function formatBoxShadowValue(shadows) {
  return shadows
    // @ts-ignore
    .map((shadow) => {
      if (!shadow.valid) {
        return shadow.raw;
      }

      return [shadow.keyword, shadow.x, shadow.y, shadow.blur, shadow.spread, shadow.color]
        .filter(Boolean)
        .join(" ");
    })
    .join(", ");
}
