export type EnvMode = keyof typeof envMode

export const envMode = {
  development: "development",
  production: "production",
  test: "test",
} as const

export const envModeConstName: Record<EnvMode, string> = {
  development: "publicEnvDev",
  production: "publicEnvProd",
  test: "test",
} as const
