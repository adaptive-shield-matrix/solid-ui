import { createEffect } from "solid-js"
import { Toaster } from "~/interactive/toast/Toaster"
import { TailwindIndicator } from "~/static/dev/TailwindIndicator"
import type { HasChildren } from "~/utils/ui/HasChildren"
import type { MayHaveTitle } from "~/utils/ui/MayHaveTitle"

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
