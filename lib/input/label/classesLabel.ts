import { classesDisabledModifierPeer } from "~ui/classes/classesDisabledModifierPeer"
import { classArr } from "~ui/utils/classArr"

export const classesLabel = classArr(
  "font-medium leading-none", // font
  "whitespace-nowrap", // no text wrapping
  classesDisabledModifierPeer, // disabled
)
