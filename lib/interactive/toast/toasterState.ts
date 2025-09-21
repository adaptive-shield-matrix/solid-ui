import { createToasterState } from "~/interactive/toast/GlobalToasterState.ts"
import { createSignalObject } from "~/utils/createSignalObject.ts"

export const toasterState = createSignalObject(createToasterState())
