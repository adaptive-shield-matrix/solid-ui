/* @refresh reload */

import { demoList } from "@/demos/demoList"
import { Router } from "@solidjs/router"
import { render } from "solid-js/web"
import { generateDemoRoutes } from "~/demo_pages/generateDemoRoutes"
import "./global.css"

const root = document.getElementById("root")

const demoRoutes = generateDemoRoutes(demoList, "")
console.log(demoRoutes)

const demoRoutesDef = [
  {
    // path: "/*",
    // component: LayoutWrapperDemo,
    children: demoRoutes,
  },
]

// @ts-ignore
render(() => <Router>{demoRoutesDef}</Router>, root!)
