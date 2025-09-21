import type { ValueOrAccessor } from "~/utils/ui/ValueOrAccessor"

export type HasDisabled = {
  disabled?: ValueOrAccessor<boolean>
}

export function isDisabled(p: HasDisabled): boolean | undefined {
  if (p.disabled === undefined) return undefined
  if (typeof p.disabled === "boolean") return p.disabled
  if (typeof p.disabled === "function") return p.disabled()
  return undefined
}
