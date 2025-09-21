import { mdiCheckCircleOutline } from "@mdi/js"
import { Show } from "solid-js"
import { Icon1 } from "~/static/img/Icon1.tsx"
import { classesPageWrapperInner, classesPageWrapperOuter } from "~/static/pages/classesPageWrapper"
import type { MayHaveChildren } from "~/utils/MayHaveChildren"
import type { MayHaveClass } from "~/utils/MayHaveClass"
import type { MayHaveInnerClassName } from "~/utils/MayHaveInnerClassName.ts"
import { classMerge } from "~/utils/classMerge.ts"

export interface SuccessPageProps extends MayHaveClass, MayHaveInnerClassName, MayHaveChildren {
  title: string
  subtitle?: string
  icon?: string
  iconClass?: string
  titleClass?: string
  subtitleClass?: string
}

export function SuccessPage(p: SuccessPageProps) {
  return (
    <div class={classMerge(classesPageWrapperOuter, p.class)}>
      <div class={classMerge(classesPageWrapperInner, p.innerClass)}>
        <Show when={p.icon}>
          <Icon1
            path={p.icon ?? mdiCheckCircleOutline}
            class={classMerge(
              "w-16 h-16", // sizing
              "mx-auto", // positioning
              "fill-green-500",
              p.iconClass,
            )}
          />
        </Show>
        <h1
          class={classMerge(
            "text-2xl font-bold", // typography
            "text-gray-800 dark:text-white", // text color
            "mt-4", // spacing
            "text-center", // text
            p.titleClass,
          )}
        >
          {p.title}
        </h1>
        <Show when={p.subtitle}>
          <p
            class={classMerge(
              "text-gray-600 dark:text-gray-300", // text color
              "mt-2", // spacing
              "text-center", // text
              p.subtitleClass,
            )}
          >
            {p.subtitle}
          </p>
        </Show>
        {p.children}
      </div>
    </div>
  )
}
