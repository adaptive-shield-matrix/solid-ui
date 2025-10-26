import { type Component, type JSXElement } from "solid-js"

export type RouteComponent = Component<any> | (() => JSXElement)

export type RouteObject = {
  path: string
  component: RouteComponent
}

export type RouteConfig = RouteObject[]
