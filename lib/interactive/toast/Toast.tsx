import { mdiClose } from "@mdi/js"
import { Show } from "solid-js"
import { ct0 } from "~/i18n/ct0.ts"
import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { ButtonIcon } from "~/interactive/button/ButtonIcon.tsx"
import { tbClose } from "~/interactive/dialog/tbClose.ts"
import { toastCva } from "~/interactive/toast/toastCva.ts"
import { toastDismiss } from "~/interactive/toast/toastDismiss.ts"
import { toastIconCva } from "~/interactive/toast/toastIconCva.ts"
import type { ToastPropsInternal } from "~/interactive/toast/ToastProps.ts"
import { Icon1 } from "~/static/img/Icon1.tsx"
import { classMerge } from "~/utils/ui/classMerge"

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
