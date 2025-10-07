import { Separator } from "~/static/separator/Separator.tsx"
import { SeparatorOr } from "~/static/separator/SeparatorOr.tsx"
import { SeparatorWithText } from "~/static/separator/SeparatorWithText.tsx"
import { Button } from "~/interactive/button/Button.tsx"
import { buttonVariant } from "~/interactive/button/buttonCva.ts"

export function DemoSeparators() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Separators Demo</h1>
      <div class="space-y-8 max-w-2xl">
        <BasicSeparatorDemo />
        <SeparatorWithTextDemo />
        <SeparatorOrDemo />
        <SeparatorStylesDemo />
        <SeparatorInFormsDemo />
      </div>
    </div>
  )
}

function BasicSeparatorDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Separator</h2>
      <div class="space-y-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 class="text-lg font-semibold">Section 1</h3>
          <p>This is the first section of content.</p>
        </div>
        <Separator />
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h3 class="text-lg font-semibold">Section 2</h3>
          <p>This is the second section of content.</p>
        </div>
        <Separator />
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <h3 class="text-lg font-semibold">Section 3</h3>
          <p>This is the third section of content.</p>
        </div>
      </div>
    </div>
  )
}

function SeparatorWithTextDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Separator with Text</h2>
      <div class="space-y-4">
        <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <h3 class="text-lg font-semibold">Part 1</h3>
          <p>Content before the separator.</p>
        </div>

        <SeparatorWithText>
          <span class="px-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            Continue Reading
          </span>
        </SeparatorWithText>

        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <h3 class="text-lg font-semibold">Part 2</h3>
          <p>Content after the separator with text.</p>
        </div>
      </div>
    </div>
  )
}

function SeparatorOrDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Separator "Or"</h2>
      <div class="max-w-md mx-auto">
        <div class="p-4 border rounded-lg">
          <Button variant={buttonVariant.outline} class="w-full mb-4">
            Sign in with Google
          </Button>

          <SeparatorOr />

          <Button variant={buttonVariant.outline} class="w-full mt-4">
            Sign in with Email
          </Button>
        </div>
      </div>
    </div>
  )
}

function SeparatorStylesDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Custom Separator Styles</h2>
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-2">Vertical Separator</h3>
          <div class="flex items-center gap-4">
            <div class="p-2 bg-gray-100 dark:bg-gray-800 rounded">Left</div>
            <div class="h-8 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            <div class="p-2 bg-gray-100 dark:bg-gray-800 rounded">Right</div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">Thick Separator</h3>
          <div class="space-y-2">
            <div class="p-2 bg-red-50 dark:bg-red-900/20 rounded">Above</div>
            <div class="w-full h-1 bg-red-300 dark:bg-red-600"></div>
            <div class="p-2 bg-red-50 dark:bg-red-900/20 rounded">Below</div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">Dotted Separator</h3>
          <div class="space-y-2">
            <div class="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">Above</div>
          <div class="w-full h-0.5 border-t-2 border-dotted border-blue-300 dark:border-blue-600"></div>
            <div class="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">Below</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SeparatorInFormsDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Separators in Forms</h2>
      <form class="space-y-6 max-w-md">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Personal Information</label>
            <input
              type="text"
              placeholder="Full Name"
              class="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              class="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <Separator />

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Account Settings</label>
            <input
              type="text"
              placeholder="Username"
              class="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              class="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <SeparatorWithText>
          <span class="px-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            Optional
          </span>
        </SeparatorWithText>

        <div class="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Company (Optional)"
              class="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              class="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <Button variant={buttonVariant.default} class="w-full">
          Create Account
        </Button>
      </form>
    </div>
  )
}