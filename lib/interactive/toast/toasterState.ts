import { createToasterState } from "~ui/interactive/toast/GlobalToasterState"
import { createSignalObject } from "~ui/utils/createSignalObject"

export const toasterState = createSignalObject(createToasterState())
