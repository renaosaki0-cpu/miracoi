import type { Dictionary, Locale } from "./types";

import ja from "./ja";
import en from "./en";
import pt from "./pt";

export const dictionaries: Record<Locale, Dictionary> = { ja, en, pt };

export type { Dictionary, Locale };
export { ja, en, pt };
