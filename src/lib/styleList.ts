import { customList } from "./customList.js";
import type { StringList } from "./types.js";

export function styleList(toParse: StringList): string | undefined {
	const parsed = customList(toParse, { join: ": ", end: ";" });

	return parsed;
}
