import type { SignalObject } from "~ui/utils/createSignalObject"
import type { SearchParamsObject } from "~ui/utils/router/SearchParamsObject"

export function createSearchParamSignalObject(name: string, params: SearchParamsObject): SignalObject<string> {
  return {
    get: function get() {
      const got = params.get[name]
      if (typeof got === "string") return got
      return ""
    },
    set: function set(newValue: string) {
      params.set({ [name]: newValue })
    },
  }
}
