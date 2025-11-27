import type { Component, JSXElement } from "solid-js"
import { splitProps } from "solid-js"
import { classMerge } from "~ui/utils/classMerge"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveSubtitle } from "~ui/utils/MayHaveSubtitle"
import type { MayHaveTitle } from "~ui/utils/MayHaveTitle"
import { classesFieldset } from "./classesFieldset"

export interface FieldsetProps extends MayHaveChildren, MayHaveTitle, MayHaveSubtitle {
  class?: string
  titleChildren?: JSXElement
}

export const Fieldset: Component<FieldsetProps> = (p) => {
  const [s, rest] = splitProps(p, ["children", "title", "titleClass", "titleChildren", "subtitleClass", "class"])

  return (
    <fieldset class={classMerge(classesFieldset, s.class)} {...rest}>
      <legend class={classMerge("px-1", s.titleClass)}>{s.titleChildren ?? s.title}</legend>
      {s.children}
    </fieldset>
  )
}
