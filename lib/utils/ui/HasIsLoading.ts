import type { ValueOrAccessor } from "~/utils/ui/ValueOrAccessor"

export type HasIsLoading = {
  isLoading?: ValueOrAccessor<boolean>
}

export function isLoading(p: HasIsLoading): boolean | undefined {
  if (p.isLoading === undefined) return undefined
  if (typeof p.isLoading === "boolean") return p.isLoading
  if (typeof p.isLoading === "function") return p.isLoading()
  return undefined
}
