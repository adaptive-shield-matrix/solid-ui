import { ttt } from "~/i18n/ttt"
import type { MayHaveClass } from "~/utils/ui/MayHaveClass"
import { SeparatorWithText } from "./SeparatorWithText"

export function SeparatorOr(p: MayHaveClass) {
  return (
    <SeparatorWithText class={p.class}>
      <p class={"mx-4 mb-0 text-center font-semibold"}>{ttt("Or")}</p>
    </SeparatorWithText>
  )
}
