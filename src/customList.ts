import { filterStrings } from "./filterStrings";
import type { StringList } from "./types";

export function customList(toParse: StringList, opt?: Options): string {
	let parsed: string;

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
