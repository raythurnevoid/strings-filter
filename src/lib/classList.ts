import { customList } from "./customList";
import type { StringList } from "./types";

export function classList(toParse: StringList): string | undefined {
	const parsed = customList(toParse, { join: " " });

	return parsed;
}
