export interface SolidRouterNavigateOptions<S = unknown> {
  resolve: boolean
  replace: boolean
  scroll: boolean
  state: S
}

export interface SolidRouterNavigator {
  (to: string, options?: Partial<SolidRouterNavigateOptions>): void
  (delta: number): void
}
