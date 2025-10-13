import type { ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { LinkBlock } from "~/demo_pages/LinkBlock"
import type { DemoListType } from "~/generate_demo_list/DemoListType"
import { buttonVariant } from "~/interactive/button/buttonCva"
import { LinkButton } from "~/interactive/link/LinkButton"
import { SimplePopover3 } from "~/interactive/popover/SimplePopover3"
import { ThemeButton } from "~/interactive/theme/ThemeButton"
import { LogoImageText } from "~/static/logo/LogoImageText"
import { iconGithub } from "~/static/nav/iconGithub"
import { iconNpm } from "~/static/nav/iconNpm"
import { objectEntries } from "~/utils/obj/objectEntries"
import { objectKeys } from "~/utils/obj/objectKeys"
import { classMerge } from "~/utils/ui/classMerge"

export interface DemoNavProps extends ComponentProps<"nav"> {
  category?: string
  compName?: string
  demoList: DemoListType
  demoPrefix: string
}

export function NavDemo(p: DemoNavProps) {
  const [, rest] = splitProps(p, ["class", "children", "category", "compName"])
  const githubUrl = "https://github.com/adaptive-shield-matrix/solid-ui"
  const npmUrl = "https://www.npmjs.com/package/@adaptive-sm/solid-ui"
  return (
    <nav class={classMerge("flex flex-wrap items-center justify-between p-1 gap-1 max-w-4xl mx-auto", p.class)} {...rest}>
      <div class="flex flex-wrap items-center justify-center">

      </div>
      <div class={"flex flex-wrap items-center gap-1"}>
        <LogoImageText logoText="solid-ui" logoTextClass="text-lg font-semibold" />
        {/* <LogoImageOnly /> */}
        {p.category && (
          <>
            <NavSeparatingSlash />
            <LinkButton variant={buttonVariant.ghost} href={`${p.demoPrefix}/${p.category}/`}>
              {p.category}
            </LinkButton>
            {p.compName && (
              <>
                <NavSeparatingSlash />
                <ComponentPopover
                  demoList={p.demoList}
                  category={p.category}
                  compName={p.compName}
                  demoPrefix={p.demoPrefix}
                />
              </>
            )}
          </>
        )}
      </div>

      <LinkButton variant={buttonVariant.ghost} icon={iconGithub} href={githubUrl} title="Github">
        Code
      </LinkButton>
      <LinkButton variant={buttonVariant.ghost} icon={iconNpm} iconClass="size-8" href={npmUrl} title="NPM">
        Package
      </LinkButton>
      <ThemeButton showText={true} class="rounded-md" />
    </nav>
  )
}

function ComponentPopover(p: DemoNavProps) {
  if (!p.category || !p.compName) return null
  const links = objectEntries(p.demoList)
    .filter(([category, tree]) => category === p.category)
    .flatMap(([category, tree]) => objectKeys(tree).map((compName) => `${p.demoPrefix}/${category}/${compName}`))
  if (!links || links.length <= 0) return null
  return (
    <SimplePopover3 buttonProps={{ variant: buttonVariant.ghost, children: p.compName }}>
      <LinkBlock header={p.category} removeUrlPrefix={`${p.demoPrefix}/${p.category}/`} links={links} />
    </SimplePopover3>
  )
}

function NavSeparatingSlash() {
  return <span class={"py-1.5 text-gray-500 text-xl"}>/</span>
}
