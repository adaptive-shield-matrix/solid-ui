import { useSearchParams } from "@solidjs/router"
import type { SearchParamsObject } from "~ui/utils/router/SearchParamsObject"

export function useSearchParamsObject(): SearchParamsObject {
  const [searchParams, setSearchParams] = useSearchParams()
  return { get: searchParams, set: setSearchParams }
}
