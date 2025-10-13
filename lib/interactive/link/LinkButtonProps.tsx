import type { ComponentProps } from "solid-js"
import { type ButtonCvaProps } from "~ui/interactive/button/buttonCva"

export interface CustomLinkButtonProps extends ButtonCvaProps {
  href: string
  isLoading?: boolean
  newTab?: boolean
  // icon
  icon?: string
  iconRight?: string
  iconClass?: string
}

export interface LinkButtonProps extends CustomLinkButtonProps, Omit<ComponentProps<"a">, "href"> {}
