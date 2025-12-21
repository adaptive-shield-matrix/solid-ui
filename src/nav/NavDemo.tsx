import type { ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import type { DemoNavDataProps } from "~ui/demo_pages/DemoNavDataProps"
import { LinkBlock } from "~ui/demo_pages/LinkBlock"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { LinkButton } from "~ui/interactive/link/LinkButton"
import { CorvuPopover } from "~ui/interactive/popover/CorvuPopover"
import { ThemeButton } from "~ui/interactive/theme/ThemeButton"
import { iconGithub } from "~ui/static/icons/iconGithub"
import { iconNpm } from "~ui/static/icons/iconNpm"
import { LogoImageText } from "~ui/static/logo/LogoImageText"
import { classMerge } from "~ui/utils/classMerge"
import { objectEntries } from "~utils/obj/objectEntries"
import { objectKeys } from "~utils/obj/objectKeys"

export interface DemoNavProps extends DemoNavDataProps, ComponentProps<"nav"> {}

export function NavDemo(p: DemoNavProps) {
  const [s, rest] = splitProps(p, ["class", "children", "category", "compName", "demoList", "demoPrefix"])
  const githubUrl = "https://github.com/adaptive-shield-matrix/solid-ui"
  const npmUrl = "https://www.npmjs.com/package/@adaptive-sm/solid-ui"
  return (
    <nav
      class={classMerge("flex flex-wrap items-center justify-between p-1 gap-1 max-w-4xl mx-auto", s.class)}
      {...rest}
    >
      <div class="flex flex-wrap items-center justify-center"></div>
      <div class={"flex flex-wrap items-center gap-1"}>
        <LogoImageText logoText="solid-ui" logoTextClass="text-lg font-semibold" />
        {/* <LogoImageOnly /> */}
        {s.category && (
          <>
            <NavSeparatingSlash />
            <LinkButton variant={buttonVariant.ghost} href={`${s.demoPrefix}/${s.category}/`}>
              {s.category}
            </LinkButton>
            {s.compName && (
              <>
                <NavSeparatingSlash />
                <ComponentPopover
                  demoList={s.demoList}
                  category={s.category}
                  compName={s.compName}
                  demoPrefix={s.demoPrefix}
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

function ComponentPopover(
  s: Pick<DemoNavProps, "class" | "children" | "category" | "compName" | "demoList" | "demoPrefix">,
) {
  if (!s.category || !s.compName) return null
  const links = objectEntries(s.demoList)
    .filter(([category, tree]) => category === s.category)
    .flatMap(([category, tree]) => objectKeys(tree).map((compName) => `${s.demoPrefix}/${category}/${compName}`))
  if (!links || links.length <= 0) return null
  return (
    <CorvuPopover variant={buttonVariant.ghost} buttonChildren={s.compName}>
      <LinkBlock header={s.category} removeUrlPrefix={`${s.demoPrefix}/${s.category}/`} links={links} />
    </CorvuPopover>
  )
}

function NavSeparatingSlash() {
  return <span class={"py-1.5 text-gray-500 text-xl"}>/</span>
}
