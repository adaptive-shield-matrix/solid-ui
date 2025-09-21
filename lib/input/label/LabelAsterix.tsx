import { ct0 } from "~/i18n/ct0.ts"
import { t4atomizedInput } from "~/input/input/t4atomizedInput.ts"
import { classMerge } from "~/utils/classMerge.ts"
import type { MayHaveClass } from "~/utils/MayHaveClass"

export interface LabelAsterixProps extends MayHaveClass {}

export function LabelAsterix(p: LabelAsterixProps) {
  return (
    <span class={classMerge("text-primary", p.class)} title={ct0(t4atomizedInput.Is_required)}>
      {" *"}
    </span>
  )
}
