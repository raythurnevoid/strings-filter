import { customList } from "./customList";
import type { StringList } from "./types";

export function styleList(toParse: StringList): string | undefined {
	const parsed = customList(toParse, { join: "; ", end: ";" });

	return parsed;
}
