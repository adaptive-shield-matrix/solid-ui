import type { SearchParamsObject } from "~ui/utils/router/SearchParamsObject"

export function getSearchParamAsString(params: SearchParamsObject, name: string): string {
  const got = params.get[name]
  if (typeof got === "string") return got
  return ""
}
