import { BulletLinks } from "~ui/interactive/list/BulletLinks.tsx"
import { BulletLinksO } from "~ui/interactive/list/BulletLinksO.tsx"
import { toastAdd } from "~ui/interactive/toast/toastAdd.ts"
import { toastVariant } from "~ui/interactive/toast/toastVariant.ts"

export function DemoLists() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Lists Demo</h1>
      <div class="space-y-8">
        <BasicBulletLinksDemo />
        <BulletLinksWithDisplayDemo />
        <BulletLinksWithCustomClassesDemo />
        <BulletLinksOObjectDemo />
        <BulletLinksWithClickDemo />
      </div>
    </div>
  )
}

function BasicBulletLinksDemo() {
  const urls = [
    "https://example.com/page1",
    "https://example.com/page2",
    "https://example.com/page3",
  ]

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Bullet Links</h2>
      <BulletLinks urls={urls} />
    </div>
  )
}

function BulletLinksWithDisplayDemo() {
  const urls = [
    "https://example.com/about",
    "https://example.com/contact",
    "https://example.com/services",
  ]
  const display = ["About Us", "Contact", "Our Services"]

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Bullet Links with Custom Display</h2>
      <BulletLinks urls={urls} display={display} />
    </div>
  )
}

function BulletLinksWithCustomClassesDemo() {
  const urls = [
    "https://example.com/docs",
    "https://example.com/api",
    "https://example.com/support",
  ]

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Bullet Links with Custom Classes</h2>
      <BulletLinks
        urls={urls}
        bulletClass="text-red-500"
        linkClass="text-blue-600 hover:text-blue-800"
        itemClass="mb-2"
      />
    </div>
  )
}

function BulletLinksOObjectDemo() {
  const urlObject = {
    "Home": "https://example.com/",
    "Blog": "https://example.com/blog",
    "Portfolio": "https://example.com/portfolio",
    "Resume": "https://example.com/resume",
  }

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Bullet Links from Object</h2>
      <BulletLinksO urlObject={urlObject} />
    </div>
  )
}

function BulletLinksWithClickDemo() {
  const urls = [
    "https://example.com/link1",
    "https://example.com/link2",
    "https://example.com/link3",
  ]

  const handleClick = () => {
    toastAdd({
      title: "Link clicked!",
      variant: toastVariant.info
    })
  }

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Bullet Links with Click Handler</h2>
      <BulletLinks urls={urls} onClick={handleClick} />
      <p class="text-sm text-muted-foreground mt-2">
        Click any link to trigger a toast notification.
      </p>
    </div>
  )
}
