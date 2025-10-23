import { mdiClose } from "@mdi/js"
import { Show } from "solid-js"
import { ct0 } from "~ui/i18n/ct0"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { tbClose } from "~ui/interactive/dialog/tbClose"
import { toastCva } from "~ui/interactive/toast/toastCva"
import { toastDismiss } from "~ui/interactive/toast/toastDismiss"
import { toastIconCva } from "~ui/interactive/toast/toastIconCva"
import type { ToastPropsInternal } from "~ui/interactive/toast/ToastProps"
import { Icon1 } from "~ui/static/icon/Icon1"
import { classMerge } from "~ui/utils/ui/classMerge"

export function Toast(p: ToastPropsInternal) {
  return (
    <li
      role="status"
      aria-live="polite"
      aria-atomic={true}
      tabIndex={0}
      data-state={"open"}
      class={toastCva(p.variant, p.class)}
    >
      <ToastHeader {...p} />
      <Show when={p.description}>
        <p class={classMerge("text-lg break-words", p.descriptionClass)}>{p.description}</p>
      </Show>
      {p.children}
    </li>
  )
}

function ToastHeader(p: ToastPropsInternal) {
  return (
    <div class={classMerge("flex flex-wrap", "gap-2", "items-center", "print:hidden")}>
      <Show when={p.icon}>
        <Icon1 path={p.icon!} class={toastIconCva(p.variant, p.iconClass)} />
      </Show>
      <p class={classMerge("text-lg font-bold break-words flex-1", p.titleClass)}>{p.title}</p>
      <Show when={p.description}>
        <p class={classMerge("break-words flex-1", p.descriptionClass)}>{p.description}</p>
      </Show>
      <ButtonIcon
        variant={buttonVariant.ghost}
        title={ct0(tbClose)}
        icon={mdiClose}
        iconClass={"text-white fill-white"}
        onClick={() => toastDismiss(p.id)}
      />
    </div>
  )
}
