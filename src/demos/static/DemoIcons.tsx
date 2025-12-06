import { mdiAccount, mdiCog, mdiHeart, mdiHome, mdiStar } from "@mdi/js"
import { Icon } from "~ui/static/icon/Icon"
import { SvgIconGoogle as IconGoogle } from "~ui/static/icon/IconGoogle"

export function DemoIcons() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Icons Demo</h1>
      <div class="space-y-8">
        <IconMdiDemo />
        <IconGoogleDemo />
        <IconsWithTitlesDemo />
        <IconsWithCustomClassesDemo />
      </div>
    </div>
  )
}

function IconMdiDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Icon Component</h2>
      <div class="flex gap-4">
        <Icon path={mdiHome} />
        <Icon path={mdiHeart} />
        <Icon path={mdiStar} />
        <Icon path={mdiCog} />
      </div>
    </div>
  )
}

function IconGoogleDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Google Icon</h2>
      <div class="flex gap-4">
        <IconGoogle />
        <span class="text-sm text-muted-foreground">Google logo icon</span>
      </div>
    </div>
  )
}

function IconsWithTitlesDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Icons with Titles (Accessible)</h2>
      <div class="flex gap-4">
        <Icon path={mdiHome} title="Home" />
        <Icon path={mdiAccount} title="User Account" />
        <Icon path={mdiCog} title="Settings" />
      </div>
      <p class="text-sm text-muted-foreground mt-2">Icons with titles are accessible to screen readers.</p>
    </div>
  )
}

function IconsWithCustomClassesDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Icons with Custom Classes</h2>
      <div class="flex gap-4">
        <Icon path={mdiHeart} class="text-red-500 w-8 h-8" />
        <Icon path={mdiStar} class="text-yellow-500 w-6 h-6" />
        <Icon path={mdiCog} class="text-blue-500 w-10 h-10" />
      </div>
      <p class="text-sm text-muted-foreground mt-2">Icons can be styled with custom colors and sizes.</p>
    </div>
  )
}
