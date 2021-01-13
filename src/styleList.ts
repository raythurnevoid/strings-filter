import { customList } from "./customList";
import type { StringList } from "./types";

export function styleList(toParse: StringList): string {
	const parsed = customList(toParse, { join: "; ", end: ";" });

	return parsed;
}
