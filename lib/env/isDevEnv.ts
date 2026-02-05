import { envMode } from "~ui/env/envMode"
import { getEnvMode } from "~ui/env/getEnvMode"

export function isDevEnv(fallback = envMode.missing): boolean {
  return getEnvMode(fallback) === envMode.development
}
