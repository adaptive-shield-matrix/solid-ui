import { createToasterState } from "~ui/interactive/toast/GlobalToasterState"
import { createSignalObject } from "~ui/utils/ui/createSignalObject"

export const toasterState = createSignalObject(createToasterState())
