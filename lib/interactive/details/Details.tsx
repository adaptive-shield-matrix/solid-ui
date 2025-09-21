import { mdiChevronDown } from "@mdi/js"
import { Show, type JSXElement } from "solid-js"
import { Icon1 } from "~/static/img/Icon1"
import type { HasChildren } from "~/utils/ui/HasChildren"
import type { MayHaveClass } from "~/utils/ui/MayHaveClass"
import type { MayHaveIcon } from "~/utils/ui/MayHaveIcon"
import type { MayHaveSubtitle } from "~/utils/ui/MayHaveSubtitle"
import type { MayHaveTitle } from "~/utils/ui/MayHaveTitle"
import { classArr } from "~/utils/ui/classArr"
import { classMerge } from "~/utils/ui/classMerge"

export interface DetailsProps extends MayHaveClass, MayHaveIcon, MayHaveTitle, MayHaveSubtitle, HasChildren {
  summaryClass?: string
  summaryEl?: JSXElement
}

export function Details(p: DetailsProps) {
  return (
    <details
      class={classMerge(
        "group",
        "bg-white dark:bg-gray-800",
        "rounded-lg border border-gray-200",
        "shadow-sm",
        "overflow-hidden",
        p.class,
      )}
    >
      <summary
        class={classArr(
          "flex flex-col sm:flex-row items-center justify-between",
          "p-6",
          "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
          p.summaryClass,
        )}
      >
        <Show when={!p.summaryEl && p.title}>
          <div class={"flex flex-col sm:flex-row gap-4"}>
            <Show when={p.icon}>
              <Icon1 path={p.icon!} class="size-7 mt-1" />
            </Show>
            <div>
              <h3 class={"text-xl font-semibold"}>{p.title}</h3>
              <Show when={p.subtitle}>
                <p class={"text-muted-foreground mt-1"}>{p.subtitle}</p>
              </Show>
            </div>
          </div>
        </Show>
        <Show when={p.summaryEl}>{p.summaryEl}</Show>
        <Icon1
          path={mdiChevronDown}
          class={classArr("size-7", "text-gray-400 dark:text-gray-600", "transition-transform group-open:rotate-180")}
        />
      </summary>
      {p.children}
    </details>
  )
}
