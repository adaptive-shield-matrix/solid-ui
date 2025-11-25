import { ttl } from "~ui/i18n/ttl"
import { tbIsRequired } from "~ui/input/input/tbIsRequired"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classMerge } from "~ui/utils/classMerge"

export interface LabelAsterixProps extends MayHaveClass {}

export function LabelAsterix(p: LabelAsterixProps) {
  return (
    <span class={classMerge("text-primary", p.class)} title={ttl(tbIsRequired)}>
      {" *"}
    </span>
  )
}
