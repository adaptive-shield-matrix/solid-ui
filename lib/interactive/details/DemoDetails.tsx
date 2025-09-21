import { mdiAccount } from "@mdi/js"
import { Details } from "~/interactive/details/Details.tsx"

export function DemoDetails() {
  return (
    <div class={"p-4 flex flex-wrap justify-start gap-4"}>
      <DetailsWithTitleSubtitleIcon />
      <DetailsWithTitleOnly />
      <DetailsWithSummaryEl />
    </div>
  )
}

function DetailsWithTitleSubtitleIcon() {
  return (
    <div class={"flex flex-col items-start"}>
      <h2 class={"text-center text-3xl font-bold mb-4"}>Details with title, subtitle and icon</h2>
      <Details title="User Profile" subtitle="Manage your account settings" icon={mdiAccount} class="w-96">
        <div class="p-4 border-t border-gray-200">
          <p class="text-gray-700">
            This is the content area for the user profile details. You can put any content here that should be revealed
            when the details element is opened.
          </p>
          <ul class="mt-2 list-disc list-inside text-gray-600">
            <li>Update personal information</li>
            <li>Change password</li>
            <li>Manage preferences</li>
          </ul>
        </div>
      </Details>
    </div>
  )
}

function DetailsWithTitleOnly() {
  return (
    <div class={"flex flex-col items-start"}>
      <h2 class={"text-center text-3xl font-bold mb-4"}>Details with title only</h2>
      <Details title="System Information" class="w-96">
        <div class="p-4 border-t border-gray-200">
          <p class="text-gray-700">
            This details section only has a title but no subtitle or icon. It demonstrates the minimal configuration of
            the Details component.
          </p>
          <div class="mt-3 p-3 bg-gray-50 rounded">
            <p class="text-sm font-mono">Version: 1.0.0</p>
            <p class="text-sm font-mono">Status: Running</p>
          </div>
        </div>
      </Details>
    </div>
  )
}

function DetailsWithSummaryEl() {
  const customSummary = (
    <div class="flex items-center gap-2">
      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
        <span class="text-white text-xs">i</span>
      </div>
      <span class="font-medium">Custom Summary Element</span>
    </div>
  )

  return (
    <div class={"flex flex-col items-start"}>
      <h2 class={"text-center text-3xl font-bold mb-4"}>Details with custom summary element</h2>
      <Details summaryEl={customSummary} class="w-96">
        <div class="p-4 border-t border-gray-200">
          <p class="text-gray-700">
            This details section uses a custom summary element instead of the default title/subtitle structure. The
            custom summary can include any JSX elements you want.
          </p>
          <div class="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
            <p class="text-blue-800">This is an informational message inside the details content area.</p>
          </div>
        </div>
      </Details>
    </div>
  )
}
