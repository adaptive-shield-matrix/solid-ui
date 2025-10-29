import { mdiFormatAlignCenter, mdiFormatAlignLeft, mdiFormatAlignRight } from "@mdi/js"
import { toastAdd } from "~ui/interactive/toast/toastAdd"
import { toastVariant } from "~ui/interactive/toast/toastVariant"
import { ToggleButton } from "~ui/interactive/toggle/ToggleButton"
import { createSignalObject } from "~ui/utils/createSignalObject"

export function DemoToggle() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Toggle Button Demo</h1>
      <div class="space-y-8">
        <BasicToggleDemo />
        <TextFormattingDemo />
        <MultipleToggleDemo />
        <ToggleWithStateDemo />
      </div>
    </div>
  )
}

function BasicToggleDemo() {
  const pressedSignal = createSignalObject(false)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Toggle</h2>
      <div class="flex items-center gap-4">
        <ToggleButton
          pressedSignal={pressedSignal}
          title="Toggle Bold"
          onPressedChange={(pressed) => {
            toastAdd({
              title: `Toggle ${pressed ? 'pressed' : 'released'}`,
              variant: toastVariant.info
            })
          }}
        >
          Bold
        </ToggleButton>
        <span class="text-sm text-muted-foreground">
          State: {pressedSignal.get() ? 'Pressed' : 'Released'}
        </span>
      </div>
    </div>
  )
}

function TextFormattingDemo() {
  const boldPressed = createSignalObject(false)
  const italicPressed = createSignalObject(false)
  const underlinePressed = createSignalObject(false)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Text Formatting</h2>
      <div class="flex items-center gap-2 p-4 border rounded-lg">
        <ToggleButton
          pressedSignal={boldPressed}


          title="Bold"
        />
        <ToggleButton
          pressedSignal={italicPressed}
          title="Italic"
        />
        <ToggleButton
          pressedSignal={underlinePressed}
          title="Underline"
        />
      </div>
      <div class="mt-2 text-sm text-muted-foreground">
        Formatting: {boldPressed.get() ? 'B' : ''}{italicPressed.get() ? 'I' : ''}{underlinePressed.get() ? 'U' : ''}
      </div>
    </div>
  )
}

function MultipleToggleDemo() {
  const toggles = [
    { id: 'left', pressed: createSignalObject(false), icon: mdiFormatAlignLeft, label: 'Left' },
    { id: 'center', pressed: createSignalObject(false), icon: mdiFormatAlignCenter, label: 'Center' },
    { id: 'right', pressed: createSignalObject(false), icon: mdiFormatAlignRight, label: 'Right' },
  ]

  const handleToggleChange = (toggleId: string, pressed: boolean) => {
    // Ensure only one alignment is selected at a time
    toggles.forEach(toggle => {
      if (toggle.id !== toggleId) {
        toggle.pressed.set(false)
      }
    })

    toastAdd({
      title: `${toggleId} alignment ${pressed ? 'selected' : 'deselected'}`,
      variant: toastVariant.info
    })
  }

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Multiple Toggle (Single Selection)</h2>
      <div class="flex items-center gap-2">
        {toggles.map(toggle => (
          <ToggleButton
            pressedSignal={toggle.pressed}
            title={`Align ${toggle.label}`}
            onPressedChange={(pressed) => handleToggleChange(toggle.id, pressed)}
          >
            {toggle.label}
          </ToggleButton>
        ))}
      </div>
    </div>
  )
}

function ToggleWithStateDemo() {
  const pressedSignal = createSignalObject(true)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Toggle with Initial State</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <ToggleButton
            pressedSignal={pressedSignal}

            title="Feature Toggle"
          >
            Enable Feature
          </ToggleButton>
          <span class="text-sm text-muted-foreground">
            Feature is {pressedSignal.get() ? 'enabled' : 'disabled'}
          </span>
        </div>

        <div class="mt-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900/20">
          <h3 class="font-semibold mb-2">Feature Content</h3>
          <p>This content is {pressedSignal.get() ? 'visible' : 'hidden'} based on the toggle state.</p>
        </div>
      </div>
    </div>
  )
}
