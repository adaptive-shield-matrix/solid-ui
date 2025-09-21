import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { buttonCva2, type ButtonCvaProps } from "~/interactive/button/buttonCva.ts"
import { classesButtonClickAnimation } from "~/interactive/button/classesButtonClickAnimation"

export interface ButtonProps extends ComponentProps<"button">, ButtonCvaProps {}

export const Button: Component<ButtonProps> = (p) => {
  const [, rest] = splitProps(p, ["variant", "size", "class", "type"])
  return (
    <button
      class={buttonCva2(p.variant, p.size, classesButtonClickAnimation, p.class)}
      type={p.type ?? "button"}
      {...rest}
    />
  )
}
