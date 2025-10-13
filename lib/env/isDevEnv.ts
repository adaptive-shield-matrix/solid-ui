import { envMode } from "~ui/env/envMode"
import { getEnvMode } from "~ui/env/getEnvMode"

export function isDevEnv(): boolean {
  return getEnvMode() === envMode.development
}
