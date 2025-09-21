import { envMode } from "~/env/envMode"
import { getEnvMode } from "~/env/getEnvMode"

export function isProdEnv(): boolean {
  return getEnvMode() === envMode.production
}
