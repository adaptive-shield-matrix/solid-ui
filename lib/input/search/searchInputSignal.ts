import { scheduleIdle } from "@solid-primitives/scheduled"
import { createSignalObject } from "~/utils/ui/createSignalObject"


export const searchInputSignal = createSignalObject("")

export const searchInputDebouncedSignal = scheduleIdle(searchInputSignal.get)
// export const searchInputDebouncedSignal = createMemo(() => {
//   return scheduleIdle(searchInputSignal.get)
// })
