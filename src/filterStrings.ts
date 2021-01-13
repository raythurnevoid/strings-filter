import type { StringList } from "./types";

export function filterStrings(toFilter: StringList): string[] {
	if (!toFilter) return undefined;

	const parsedArray = toFilter
		.map((item) => {
			if (Array.isArray(item))
				return item[0] ? item[1] : item[0] === undefined ? undefined : "";
			else return item;
		})
		.filter((item) => item || item === undefined);

	if (parsedArray.some((item) => item !== undefined)) {
		return parsedArray.filter((item) => item);
	} else {
		return [];
	}
}
