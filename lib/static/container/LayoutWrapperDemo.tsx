import { createEffect } from "solid-js"
import { Toaster } from "~ui/interactive/toast/Toaster"
import { TailwindIndicator } from "~ui/static/dev/TailwindIndicator"
import type { HasChildren } from "~ui/utils/ui/HasChildren"
import type { MayHaveTitle } from "~ui/utils/ui/MayHaveTitle"

export interface LayoutWrapperDemoProps extends HasChildren, MayHaveTitle {}

export function LayoutWrapperDemo(p: LayoutWrapperDemoProps) {
  createEffect(() => {
    if (!p.title) return
    document.title = p.title
  })
  return (
    <>
      {p.children}
      <TailwindIndicator />
      <Toaster />
    </>
  )
}
