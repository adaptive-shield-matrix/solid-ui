import { Label } from "~/input/label/Label"
import { LabelAsterix } from "~/input/label/LabelAsterix"
import type { HasChildren } from "~/utils/ui/HasChildren"
import { classMerge } from "~/utils/ui/classMerge"

export type Label2Props = {
  title: string
  subtitle?: string
  required?: boolean
  labelClass?: string
  disabled?: boolean
  id?: string
} & HasChildren

export type Label2PropsFor = Label2Props & {
  forId: string
}

export function Label2(p: Label2PropsFor) {
  return (
    <Label
      class={classMerge("font-medium whitespace-nowrap", p.disabled && "cursor-not-allowed opacity-70", p.labelClass)}
      for={p.forId}
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
    </Label>
  )
}
