import { createEffect } from "solid-js"

export type SetPageTitleProps = {
  title: string
}

export function SetPageTitle(p: SetPageTitleProps) {
  createEffect(() => {
    if (!p.title) return
    document.title = p.title
  })
  return null
}
