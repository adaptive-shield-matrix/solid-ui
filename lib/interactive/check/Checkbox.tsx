import { mdiCheckboxBlankOutline, mdiCheckboxMarked } from "@mdi/js"
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
  const [s, rest] = splitProps(p, ["id", "checked", "onChange", "disabled", "class", "children"])
  const handleToggle = () => {
    if (s.disabled) return
    s.onChange(!s.checked)
  }

  return (
    <div class={classMerge("flex items-start gap-1", s.class)}>
      <input
        id={s.id}
        type="checkbox"
        checked={s.checked}
        onChange={(e) => s.onChange(e.currentTarget.checked)}
        class="sr-only invisible"
        disabled={s.disabled}
        aria-describedby={s.id ? `${s.id}-error` : undefined}
        {...rest}
      />
      <div
        onClick={handleToggle}
        class={classMerge(
          "size-6", // sizing + interaction
          "cursor-pointer", // cursor
          "flex items-center justify-center", // layout children
          s.disabled && "cursor-not-allowed opacity-50", // disabled state
        )}
        role="checkbox"
        aria-checked={s.checked}
        aria-labelledby={s.id ? `${s.id}-label` : undefined}
        tabindex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault()
            handleToggle()
          }
        }}
      >
        <Icon1 path={s.checked ? mdiCheckboxMarked : mdiCheckboxBlankOutline} class="size-6 text-current" />
      </div>
      <label
        id={s.id ? `${s.id}-label` : undefined}
        for={s.id}
        class={classMerge(
          "cursor-pointer", // interaction
          s.disabled && "cursor-not-allowed opacity-70", // disabled state
        )}
        onClick={(e) => {
          e.preventDefault()
          handleToggle()
        }}
      >
        {s.children}
      </label>
    </div>
  )
}
