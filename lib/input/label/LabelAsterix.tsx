import { type LabelAsterixTexts, labelAsterixTextDefault } from "~ui/input/label/LabelAsterixTexts"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface LabelAsterixProps extends MayHaveClass {
  texts?: LabelAsterixTexts
}

export function LabelAsterix(p: LabelAsterixProps) {
  const texts = p.texts ?? labelAsterixTextDefault
  return (
    <span class={classMerge("text-primary", p.class)} title={texts.isRequired}>
      {" *"}
    </span>
  )
}
