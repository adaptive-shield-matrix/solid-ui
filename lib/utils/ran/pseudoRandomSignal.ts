import { createPseudoRandomSec } from "~/utils/ran/createPseudoRandom"
import { createSignalObject } from "~/utils/ui/createSignalObject"

export const pseudoRandomSignal = createSignalObject(createPseudoRandomSec())
