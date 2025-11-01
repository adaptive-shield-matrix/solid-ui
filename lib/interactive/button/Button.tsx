import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { buttonCva2, type ButtonCvaProps } from "~ui/interactive/button/buttonCva"
import { classesButtonClickAnimation } from "~ui/interactive/button/classesButtonClickAnimation"
import { classesButtonDisabled } from "~ui/interactive/button/classesButtonDisabled"

export interface ButtonProps extends ComponentProps<"button">, ButtonCvaProps {}

export const Button: Component<ButtonProps> = (p) => {
  const [s, rest] = splitProps(p, ["variant", "size", "class", "type"])
  return (
    <button
      class={buttonCva2(s.variant, s.size, classesButtonClickAnimation, p.disabled && classesButtonDisabled, s.class)}
      type={s.type ?? "button"}
      {...rest}
    />
  )
}
