import { createEffect } from "solid-js"
import { Toaster } from "~/interactive/toast/Toaster.tsx"
import type { HasChildren } from "~/utils/HasChildren.ts"
import type { MayHaveTitle } from "~/utils/MayHaveTitle"
import { TailwindIndicator } from "~/utils/TailwindIndicator.tsx"

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
