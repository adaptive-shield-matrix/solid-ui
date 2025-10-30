import { mdiCheckboxMarked, mdiSquareOutline } from "@mdi/js"
import { splitProps, type ComponentProps } from "solid-js"
import { Icon1 } from "~ui/static/icon/Icon1"
import type { MayHaveChildren } from "~ui/utils/MayHaveChildren"
import type { MayHaveClass } from "~ui/utils/MayHaveClass"
import { classMerge } from "~ui/utils/classMerge"

interface CheckboxProps extends MayHaveClass, MayHaveChildren, ComponentProps<"checkbox"> {
  id?: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
}

export function Checkbox(p: CheckboxProps) {
  const [, rest] = splitProps(p, ["id", "checked", "onChange", "disabled"])
  const handleToggle = () => {
    if (p.disabled) return
    p.onChange(!p.checked)
  }

  return (
    <div class={classMerge("flex items-start space-x-2", p.class)}>
      <input
        id={p.id}
        type="checkbox"
        checked={p.checked}
        onChange={(e) => p.onChange(e.currentTarget.checked)}
        class="sr-only invisible"
        disabled={p.disabled}
        aria-describedby={p.id ? `${p.id}-error` : undefined}
        {...rest}
      />
      <div
        onClick={handleToggle}
        class={classMerge(
          "mt-0.5 size-6", // sizing + interaction
          "cursor-pointer", // cursor
          "flex items-center justify-center", // layout children
          p.disabled && "cursor-not-allowed opacity-50", // disabled state
        )}
        role="checkbox"
        aria-checked={p.checked}
        aria-labelledby={p.id ? `${p.id}-label` : undefined}
        tabindex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault()
            handleToggle()
          }
        }}
      >
        <Icon1 path={p.checked ? mdiCheckboxMarked : mdiSquareOutline} class="w-6 h-6 text-current" />
      </div>
      <label
        id={p.id ? `${p.id}-label` : undefined}
        for={p.id}
        class={classMerge(
          "cursor-pointer", // interaction
          p.disabled && "cursor-not-allowed opacity-70", // disabled state
        )}
        onClick={(e) => {
          e.preventDefault()
          handleToggle()
        }}
      >
        {p.children}
      </label>
    </div>
  )
}
