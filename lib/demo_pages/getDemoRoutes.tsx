import { LinkBlock } from "~/demo_pages/LinkBlock"
import { pathDemos } from "~/demo_pages/pathDemos"
import type { DemoListType } from "~/generate_demo_list/DemoListType"
import { LinkButton } from "~/interactive/link/LinkButton.tsx"
import { LayoutWrapperDemo } from "~/static/container/LayoutWrapperDemo"
import { NavDemo } from "~/static/nav/NavDemo"
import { objectEntries } from "~/utils/obj/objectEntries.ts"
import { objectKeys } from "~/utils/obj/objectKeys.ts"
import type { RouteObject } from "~/utils/solid_router/RouteConfig"

const log = false

export function getDemoRoutes(demoList: DemoListType, prefix = pathDemos): RouteObject[] {
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

  const links = objectEntries(demoList).flatMap(([category, tree]) =>
    objectKeys(tree).map((compName) => `${prefix}/${category}/${compName}`),
  )
  // const links = objectEntries(explorerTree).flatMap(
  //   ([category, compName]) => `${prefix}/${category as string}/${compName}`,
  // )

  if (log) console.log(op, path)
  if (log) console.log(op, "links:", links)

  return [
    {
      path: overridePath ?? prefix,
      component: () => (
        <LayoutWrapperDemo title={"demos"}>
          <NavDemo demoList={demoList} />
          <LinkBlock header={"demos"} removeUrlPrefix={`${path}/`} links={links} />
        </LayoutWrapperDemo>
      ),
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
