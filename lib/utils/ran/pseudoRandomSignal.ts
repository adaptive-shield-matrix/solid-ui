import { createSignalObject } from "~/utils/createSignalObject.ts"
import { createPseudoRandomSec } from "~/utils/ran/createPseudoRandom.ts"

export const pseudoRandomSignal = createSignalObject(createPseudoRandomSec())
