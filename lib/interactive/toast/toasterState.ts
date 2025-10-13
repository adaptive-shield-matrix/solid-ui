import { createToasterState } from "~/interactive/toast/GlobalToasterState"
import { createSignalObject } from "~/utils/ui/createSignalObject"

export const toasterState = createSignalObject(createToasterState())
