import { For } from "solid-js"
import { LinkBlock } from "~/demo_pages/LinkBlock"
import { pathDemos } from "~/demo_pages/pathDemos"
import type { DemoListType } from "~/generate_demo_list/DemoListType"
import { LinkButton } from "~/interactive/link/LinkButton.tsx"
import { classesGridCols3xl } from "~/static/container/classesGridCols"
import { LayoutWrapperDemo } from "~/static/container/LayoutWrapperDemo"
import { NavDemo } from "~/static/nav/NavDemo"
import { classArr } from "~/utils/classArr"
import { objectEntries } from "~/utils/obj/objectEntries.ts"
import { objectKeys } from "~/utils/obj/objectKeys.ts"
import type { RouteObject } from "~/utils/solid_router/RouteConfig"

const log = false

export function generateDemoRoutes(demoList: DemoListType, prefix = pathDemos): RouteObject[] {
  const all = [
    ...getDemosL2(demoList, prefix),
    ...getDemosL1(demoList, prefix),
    ...getDemosL0(demoList, prefix),
    ...getDemos404(demoList, prefix),
  ]
  if (log)
    console.log(
      "getDemoRoutes",
      all.map((a) => a.path),
    )
  return all
}

function getDemosL2(demoList: DemoListType, prefix = pathDemos): RouteObject[] {
  const op = "getDemosL2"
  return objectEntries(demoList).flatMap(([category, tree]) => {
    return Object.entries(tree).map(([compName, Comp]) => {
      const path = `${prefix}/${category}/${compName}`
      // if (log) console.log(subTree, compName, "->", path)
      if (log) console.log(op, path)
      return {
        path,
        component: () => (
          <LayoutWrapperDemo title={compName}>
            <NavDemo demoList={demoList} category={category} compName={compName} />
            <Comp />
          </LayoutWrapperDemo>
        ),
      } satisfies RouteObject
    })
  })
}

function getDemosL1(demoList: DemoListType, prefix = pathDemos): RouteObject[] {
  const op = "getDemosL1"
  return objectEntries(demoList).map(([category, nameComp]) => {
    const path = `${prefix}/${category}`

    const links = objectKeys(nameComp).map((name) => `${prefix}/${category}/${name}`)
    if (log) console.log(op, path)
    if (log) console.log(op, "links:", links)
    const removePrefix = `${prefix}/${category}/`

    return {
      path,
      component: () => (
        <LayoutWrapperDemo title={category}>
          <NavDemo demoList={demoList} category={category} />
          <LinkBlock header={category} removeUrlPrefix={removePrefix} links={links} />
        </LayoutWrapperDemo>
      ),
    } satisfies RouteObject
  })
}

function getDemosL0(demoList: DemoListType, prefix: string = pathDemos, overridePath?: string): RouteObject[] {
  const op = "getDemosL0"
  const path = prefix

  if (log) console.log(op, path)

  return [
    {
      path: overridePath ?? prefix,
      component: () => {
        const categories = objectEntries(demoList)

        return (
          <LayoutWrapperDemo title={"demos"}>
            <NavDemo demoList={demoList} />
            <div class={classArr(classesGridCols3xl, "gap-4")}>
              <For each={categories}>
                {([category, tree]) => {
                  const categoryLinks = objectKeys(tree).map((compName) => `${prefix}/${category}/${compName}`)
                  const removePrefix = `${prefix}/${category}/Demo`
                  return (
                    <div>
                      <LinkBlock header={category} removeUrlPrefix={removePrefix} links={categoryLinks} />
                    </div>
                  )
                }}
              </For>
            </div>
          </LayoutWrapperDemo>
        )
      },
    },
  ]
}

function getDemos404(demoList: DemoListType, prefix = pathDemos): RouteObject[] {
  return [
    {
      path: `${prefix}/*`,
      component: () => (
        <LayoutWrapperDemo>
          {/*<SetPageTitle title={"demos"} />*/}
          {/*<DemoPageList />*/}
          <NavDemo demoList={demoList} />
          <h1 class={"text-xl font-semibold"}>not found</h1>
          <LinkButton href={prefix}>back to demos</LinkButton>
        </LayoutWrapperDemo>
      ),
    },
  ]
}
