import { createPseudoRandomSec } from "~/utils/ran/createPseudoRandom.ts"
import { createSignalObject } from "~/utils/ui/createSignalObject"

export const pseudoRandomSignal = createSignalObject(createPseudoRandomSec())
