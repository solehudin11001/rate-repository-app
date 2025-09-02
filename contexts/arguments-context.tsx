import type { ArgumentsAction } from "../types";
import { createGenericContext } from "./generic-context";

export const [ArgumentsProvider, useArguments] =
	createGenericContext<ArgumentsAction>();
