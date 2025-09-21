/* @refresh reload */

import { demoList } from "@/demos/demoList"
import { Router } from "@solidjs/router"
import { render } from "solid-js/web"
import { getDemoRoutes } from "~/demo_pages/getDemoRoutes"
import "./global.css"

const root = document.getElementById("root")

const demoRoutes = getDemoRoutes(demoList, "/")
console.log(demoRoutes)

const demoRoutesDef = [
  {
    // path: "/*",
    // component: LayoutWrapperDemo,
    children: getDemoRoutes(demoList, ""),
  },
]

// @ts-ignore
render(() => <Router>{demoRoutesDef}</Router>, root!)
