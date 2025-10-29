import { mdiGithub, mdiHome, mdiOpenInNew } from "@mdi/js"
import { For } from "solid-js"
import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { LinkButton } from "~ui/interactive/link/LinkButton"
import { LinkButtonIconOnly } from "~ui/interactive/link/LinkButtonIconOnly"

export function DemoLinks() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Links Demo</h1>
      <div class="space-y-8">
        <BasicLinkButtonDemo />
        <LinkButtonVariantsDemo />
        <LinkButtonWithIconsDemo />
        <LinkButtonIconOnlyDemo />
        <ExternalLinksDemo />
      </div>
    </div>
  )
}

function BasicLinkButtonDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Link Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <LinkButton href="#home">Home</LinkButton>
        <LinkButton href="#about" variant={buttonVariant.outline}>
          About
        </LinkButton>
        <LinkButton href="#contact" variant={buttonVariant.primary}>
          Contact
        </LinkButton>
      </div>
    </div>
  )
}

function LinkButtonVariantsDemo() {
  const variants = [buttonVariant.default, buttonVariant.outline, buttonVariant.ghost, buttonVariant.primary]

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Link Button Variants</h2>
      <div class="flex flex-wrap gap-4">
        <For each={variants}>
          {(variant) => (
            <LinkButton href="#variant" variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </LinkButton>
          )}
        </For>
      </div>
    </div>
  )
}

function LinkButtonWithIconsDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Link Buttons with Icons</h2>
      <div class="flex flex-wrap gap-4">
        <LinkButton href="#home" icon={mdiHome}>
          Home
        </LinkButton>
        <LinkButton href="#github" icon={mdiGithub} iconRight={mdiOpenInNew}>
          GitHub
        </LinkButton>
        <LinkButton href="#external" iconRight={mdiOpenInNew} newTab>
          External Link
        </LinkButton>
      </div>
    </div>
  )
}

function LinkButtonIconOnlyDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Icon-Only Link Buttons</h2>
      <div class="flex gap-4">
        <LinkButtonIconOnly
          href="#home"
          icon={mdiHome}
          title="Home"
          aria-label="Go to home page"
        />
        <LinkButtonIconOnly
          href="#github"
          icon={mdiGithub}
          title="GitHub"
          variant={buttonVariant.primary}
          newTab
        />
        <LinkButtonIconOnly
          href="#external"
          icon={mdiOpenInNew}
          title="External Link"
          variant={buttonVariant.outline}
          newTab
        />
      </div>
    </div>
  )
}

function ExternalLinksDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">External Links</h2>
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <LinkButton href="https://example.com" newTab>
            External Link
          </LinkButton>
          <LinkButton href="https://github.com" icon={mdiGithub} newTab>
            GitHub (New Tab)
          </LinkButton>
        </div>
        <div class="text-sm text-muted-foreground">
          <p>Links with <code>newTab=true</code> open in a new tab/window.</p>
          <p>Icon-only links should have proper <code>title</code> and <code>aria-label</code> attributes for accessibility.</p>
        </div>
      </div>
    </div>
  )
}
