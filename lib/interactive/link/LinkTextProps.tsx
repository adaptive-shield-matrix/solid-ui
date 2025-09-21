import type { ComponentProps } from "solid-js"

export interface CustomLinkTextProps {
  href: string
}

export interface LinkTextProps extends CustomLinkTextProps, Omit<ComponentProps<"a">, "href"> {}
