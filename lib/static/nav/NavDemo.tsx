import type { ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { LinkBlock } from "~/demo_pages/LinkBlock"
import { pathDemos } from "~/demo_pages/pathDemos"
import type { DemoListType } from "~/generate_demo_list/DemoListType"
import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { LinkButton } from "~/interactive/link/LinkButton.tsx"
import { SimplePopover3 } from "~/interactive/popover/SimplePopover3.tsx"
import { ThemeButton } from "~/interactive/theme/ThemeButton"
import { LogoImageOnly } from "~/static/logo/LogoImageOnly"
import { classMerge } from "~/utils/classMerge.ts"
import { objectEntries } from "~/utils/obj/objectEntries.ts"
import { objectKeys } from "~/utils/obj/objectKeys.ts"

export interface DemoNavProps extends ComponentProps<"nav"> {
  category?: string
  compName?: string
  demoList: DemoListType
}

export function NavDemo(p: DemoNavProps) {
  const [, rest] = splitProps(p, ["class", "children", "category", "compName"])
  const demoPrefix = pathDemos
  return (
    <nav class={classMerge("flex flex-wrap items-center justify-between p-1 gap-1", p.class)} {...rest}>
      <div class={"flex flex-wrap items-center gap-1"}>
        <LogoImageOnly />
        {p.category && (
          <>
            <NavSeparatingSlash />
            <LinkButton variant={buttonVariant.ghost} href={`${demoPrefix}/${p.category}/`}>
              {p.category}
            </LinkButton>
            {p.compName && (
              <>
                <NavSeparatingSlash />
                <ComponentPopover demoList={p.demoList} category={p.category} compName={p.compName} />
              </>
            )}
          </>
        )}
      </div>
      <ThemeButton />
    </nav>
  )
}

function ComponentPopover(p: DemoNavProps) {
  if (!p.category || !p.compName) return null
  const prefix = pathDemos
  const links = objectEntries(p.demoList)
    .filter(([category, tree]) => category === p.category)
    .flatMap(([category, tree]) => objectKeys(tree).map((compName) => `${prefix}/${category}/${compName}`))
  if (!links || links.length <= 0) return null
  return (
    <SimplePopover3 buttonProps={{ variant: buttonVariant.ghost, children: p.compName }}>
      <LinkBlock header={p.category} removeUrlPrefix={`${prefix}/${p.category}/`} links={links} />
    </SimplePopover3>
  )
}

function NavSeparatingSlash() {
  return <span class={"py-1.5 text-gray-500 text-xl"}>/</span>
}
