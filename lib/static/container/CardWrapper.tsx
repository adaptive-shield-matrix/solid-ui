import { splitProps, type ComponentProps } from "solid-js"
import { classesCardWrapperP4 } from "~ui/static/container/classesCardWrapper"
import { classMerge } from "~ui/utils/classMerge"

export interface CardWrapperProps extends ComponentProps<"article"> {
  id?: string
}

export function CardWrapper(p: CardWrapperProps) {
  const [s, rest] = splitProps(p, ["id", "class"])
  return <article id={s.id} class={classMerge(classesCardWrapperP4, s.class)} {...rest} />
}
