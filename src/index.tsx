/* @refresh reload */

import { demoList } from "@/demos/demoList"
import { Router } from "@solidjs/router"
import { render } from "solid-js/web"
import { generateDemoRoutes } from "~ui/demo_pages/generateDemoRoutes"
import { NavDemo } from "~ui/static/nav/NavDemo"
import "./global.css"

const root = document.getElementById("root")

const demoRoutesDef = [
  {
    // path: "/*",
    // component: LayoutWrapperDemo,
    children: generateDemoRoutes(demoList, "", NavDemo),
  },
]

// @ts-ignore
render(() => <Router>{demoRoutesDef}</Router>, root!)
