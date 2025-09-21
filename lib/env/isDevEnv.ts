import { envMode } from "~/env/envMode"
import { getEnvMode } from "~/env/getEnvMode"

export function isDevEnv(): boolean {
  return getEnvMode() === envMode.development
}
