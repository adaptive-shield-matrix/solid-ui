import { envMode } from "~ui/env/envMode"
import { getEnvMode } from "~ui/env/getEnvMode"

export function isProdEnv(fallback = envMode.missing): boolean {
  return getEnvMode(fallback) === envMode.test
}
