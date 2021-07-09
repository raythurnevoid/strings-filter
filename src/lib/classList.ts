import { customList } from "./customList.js";
import type { StringList } from "./types.js";

export function classList(toParse: StringList): string | undefined {
	const parsed = customList(toParse, { join: " " });

	return parsed;
}
