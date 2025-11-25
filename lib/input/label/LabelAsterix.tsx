import { ttt } from "~ui/i18n/ttt"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"

export interface LabelAsterixProps extends MayHaveClass {
  texts?: LabelAsterixTexts
}

export type LabelAsterixTexts = {
  isRequired: string
}

export function LabelAsterix(p: LabelAsterixProps) {
  const texts =
    p.texts ??
    ({
      isRequired: ttt("Required field"),
    } as const satisfies LabelAsterixTexts)

  return (
    <span class={classMerge("text-primary", p.class)} title={texts.isRequired}>
      {" *"}
    </span>
  )
}
