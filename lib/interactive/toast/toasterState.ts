import { createToasterState } from "~/interactive/toast/GlobalToasterState.ts"
import { createSignalObject } from "~/utils/ui/createSignalObject"

export const toasterState = createSignalObject(createToasterState())
