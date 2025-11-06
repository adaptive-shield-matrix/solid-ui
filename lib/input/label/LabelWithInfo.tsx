import { Label } from "~ui/input/label/Label"
import { LabelAsterix } from "~ui/input/label/LabelAsterix"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import { classMerge } from "~ui/utils/classMerge"

export interface Label2Props extends MayHaveChildren {
  title: string
  subtitle?: string
  required?: boolean
  labelClass?: string
  disabled?: boolean
  id?: string
}

export interface Label2PropsFor extends Label2Props {
  forId: string
}

export function LabelWithSubtitle(p: Label2PropsFor) {
  return (
    <Label class={classMerge("flex items-end", p.labelClass)} for={p.forId} id={p.id}>
      <span>{p.title}</span>
      {p.required && <LabelAsterix />}
      {p.subtitle && (
        <>
          <br />
          <span class={"font-normal whitespace-normal"}>{p.subtitle}</span>
        </>
      )}
      {p.children}
    </Label>
  )
}
