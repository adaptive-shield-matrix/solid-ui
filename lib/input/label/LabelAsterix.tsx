import { ct0 } from "~ui/i18n/ct0"
import { t4atomizedInput } from "~ui/input/input/t4atomizedInput"
import type { MayHaveClass } from "~ui/utils/ui/MayHaveClass"
import { classMerge } from "~ui/utils/ui/classMerge"

export interface LabelAsterixProps extends MayHaveClass {}

export function LabelAsterix(p: LabelAsterixProps) {
  return (
    <span class={classMerge("text-primary", p.class)} title={ct0(t4atomizedInput.Is_required)}>
      {" *"}
    </span>
  )
}
