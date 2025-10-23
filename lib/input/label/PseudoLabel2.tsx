import type { Label2Props } from "~ui/input/label/Label2"
import { LabelAsterix } from "~ui/input/label/LabelAsterix"
import { classMerge } from "~ui/utils/classMerge"

export function PseudoLabel2(p: Label2Props) {
  return (
    <div
      class={classMerge("font-medium whitespace-nowrap", p.disabled && "cursor-not-allowed opacity-70", p.labelClass)}
      id={p.id}
    >
      {p.title}
      {p.required && <LabelAsterix />}
      {p.subtitle && (
        <>
          <br />
          <span class={"font-normal whitespace-normal"}>{p.subtitle}</span>
        </>
      )}
      {p.children}
    </div>
  )
}
