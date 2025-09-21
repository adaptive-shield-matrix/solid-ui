import { mdiAlertBoxOutline } from "@mdi/js"
import { Icon1 } from "~/static/img/Icon1.tsx"
import type { MayHaveChildren } from "~/utils/ui/MayHaveChildren"
import type { MayHaveClass } from "~/utils/ui/MayHaveClass"
import { classMerge } from "~/utils/ui/classMerge"

export interface ErrorPageProps extends MayHaveClass, MayHaveChildren {
  title: string
  subtitle?: string
  icon?: string
  iconClass?: string
  titleClass?: string
  subtitleClass?: string
}

export function ErrorPage(p: ErrorPageProps) {
  return (
    <div
      class={classMerge(
        "flex flex-col items-center justify-center", // layout
        "min-h-screen", // sizing
        "bg-gray-50 dark:bg-gray-900", // bg
        "p-4", // spacing
        p.class,
      )}
    >
      <div
        class={classMerge(
          "max-w-md w-full", // sizing
          "bg-white dark:bg-gray-800", // bg
          "rounded-lg shadow-md", // styling
          "p-8 text-center", // spacing + typography
        )}
      >
        <Icon1
          path={p.icon ?? mdiAlertBoxOutline}
          class={classMerge(
            "w-16 h-16 mx-auto", // sizing + layout
            "fill-red-500", // color
            p.iconClass,
          )}
        />
        <h1
          class={classMerge(
            "text-2xl font-bold", // typography
            "text-gray-800 dark:text-white", // color
            "mt-4", // spacing
            p.titleClass,
          )}
        >
          {p.title}
        </h1>
        {p.subtitle && (
          <p
            class={classMerge(
              "text-gray-600 dark:text-gray-300", // color
              "mt-2", // spacing
              p.subtitleClass,
            )}
          >
            {p.subtitle}
          </p>
        )}
        {p.children}
      </div>
    </div>
  )
}
