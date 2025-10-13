import { envMode } from "~ui/env/envMode"
import { getEnvMode } from "~ui/env/getEnvMode"

export function isProdEnv(): boolean {
  return getEnvMode() === envMode.production
}
