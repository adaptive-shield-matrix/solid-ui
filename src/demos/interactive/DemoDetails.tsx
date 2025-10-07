import { mdiAccount, mdiInformation } from "@mdi/js"
import { Details } from "~/interactive/details/Details.tsx"

export function DemoDetails() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Details Demo</h1>
      <div class="space-y-8 max-w-2xl">
        <BasicDetailsDemo />
        <DetailsWithIconDemo />
        <DetailsWithSubtitleDemo />
        <CustomSummaryDemo />
        <NestedContentDemo />
      </div>
    </div>
  )
}

function BasicDetailsDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Details</h2>
      <Details title="Basic Example">
        <div class="p-6 border-t border-gray-200 dark:border-gray-700">
          <p>This is the content that expands when you click the summary.</p>
          <p class="mt-2">You can put any content here, including lists, images, or other components.</p>
        </div>
      </Details>
    </div>
  )
}

function DetailsWithIconDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Details with Icon</h2>
      <Details
        icon={mdiInformation}
        title="Information Panel"
      >
        <div class="p-6 border-t border-gray-200 dark:border-gray-700">
          <p>This details component includes an icon in the summary.</p>
          <p class="mt-2">Icons help users quickly identify the type of content.</p>
        </div>
      </Details>
    </div>
  )
}

function DetailsWithSubtitleDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Details with Subtitle</h2>
      <Details
        icon={mdiAccount}
        title="User Profile"
        subtitle="View and edit your account information"
      >
        <div class="p-6 border-t border-gray-200 dark:border-gray-700">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                class="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                class="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>
      </Details>
    </div>
  )
}

function CustomSummaryDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Custom Summary</h2>
      <Details
        summaryEl={
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="font-semibold">Custom Summary Element</span>
            <span class="text-sm text-muted-foreground">(3 items)</span>
          </div>
        }
      >
        <div class="p-6 border-t border-gray-200 dark:border-gray-700">
          <ul class="list-disc list-inside space-y-1">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
        </div>
      </Details>
    </div>
  )
}

function NestedContentDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Nested Content</h2>
      <Details title="FAQ Section">
        <div class="border-t border-gray-200 dark:border-gray-700">
          <Details title="What is this component?">
            <div class="p-6 border-t border-gray-200 dark:border-gray-700 ml-4">
              <p>The Details component is a collapsible container that uses the HTML &lt;details&gt; element.</p>
            </div>
          </Details>
          <Details title="How do I customize it?">
            <div class="p-6 border-t border-gray-200 dark:border-gray-700 ml-4">
              <p>You can pass props like title, subtitle, icon, and custom summary elements.</p>
            </div>
          </Details>
        </div>
      </Details>
    </div>
  )
}