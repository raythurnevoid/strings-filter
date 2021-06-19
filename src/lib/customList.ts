import { filterStrings } from "./filterStrings";
import type { StringList } from "./types";

export function customList(
	toParse: StringList,
	opt?: Options
): string | undefined {
	let parsed: string | undefined;

	const parsedArray = filterStrings(toParse);

	if (parsedArray?.length) {
		parsed = `${opt?.start ?? ""}${parsedArray.join(opt?.join ?? "")}${
			opt?.end ?? ""
		}`;
	} else {
		parsed = undefined;
	}

	return parsed;
}

interface Options {
	start?: string;
	end?: string;
	join?: string;
}
