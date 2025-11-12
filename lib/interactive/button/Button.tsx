import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { classesDisabledDirectly } from "~ui/classes/classesDisabledDirectly"
import { buttonCva2, type ButtonCvaProps } from "~ui/interactive/button/buttonCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"

export interface ButtonProps extends ComponentProps<"button">, ButtonCvaProps {}

export const Button: Component<ButtonProps> = (p) => {
  const [s, rest] = splitProps(p, ["variant", "size", "class", "type"])
  return (
    <button
      class={buttonCva2(s.variant, s.size, classesButtonClickAnimation, p.disabled && classesDisabledDirectly, s.class)}
      type={s.type ?? "button"}
      {...rest}
    />
  )
}
