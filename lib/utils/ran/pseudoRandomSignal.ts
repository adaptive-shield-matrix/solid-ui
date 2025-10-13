import { createPseudoRandomSec } from "~ui/utils/ran/createPseudoRandom"
import { createSignalObject } from "~ui/utils/ui/createSignalObject"

export const pseudoRandomSignal = createSignalObject(createPseudoRandomSec())
