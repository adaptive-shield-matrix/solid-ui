import { mdiCodeBraces, mdiCodeJson, mdiHeart, mdiLoading, mdiTestTube, mdiTestTubeEmpty } from "@mdi/js"
import { createSignal } from "solid-js"
import { Button } from "~ui/interactive/button/Button"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon"
import { ButtonIcon1 } from "~ui/interactive/button/ButtonIcon1"
import { ButtonIconOnly } from "~ui/interactive/button/ButtonIconOnly"
import { buttonSize, buttonVariant } from "~ui/interactive/button/buttonCva"
import { ToggleButton } from "~ui/interactive/toggle/ToggleButton"
import { ToggleButtonIconOnly } from "~ui/interactive/toggle/ToggleButtonIconOnly"
import { createSignalObject } from "~ui/utils/createSignalObject"
import { toastAdd } from "~ui/interactive/toast/toastAdd"
import { toastVariant } from "~ui/interactive/toast/toastVariant"

export function DemoButtons() {
  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Buttons Demo</h1>
      <div class="space-y-8">
        <BasicButtonsDemo />
        <ButtonVariantsDemo />
        <ButtonSizesDemo />
        <ButtonIconDemo />
        <ButtonIconOnlyDemo />
        <ButtonIcon1Demo />
        <ButtonStatesDemo />
        <ToggleButtonsDemo />
      </div>
    </div>
  )
}

function BasicButtonsDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Basic Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <Button>Default Button</Button>
        <Button variant={buttonVariant.outline}>Outline</Button>
        <Button variant={buttonVariant.ghost}>Ghost</Button>
        <Button variant={buttonVariant.link}>Link</Button>
      </div>
    </div>
  )
}

function ButtonVariantsDemo() {
  const variants = Object.values(buttonVariant)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Button Variants</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {variants.map((variant) => (
          <Button variant={variant}>{variant}</Button>
        ))}
      </div>
    </div>
  )
}

function ButtonSizesDemo() {
  const sizes = Object.values(buttonSize)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Button Sizes</h2>
      <div class="flex items-center gap-4 flex-wrap">
        {sizes.map((size) => (
          <Button size={size}>Size {size}</Button>
        ))}
      </div>
    </div>
  )
}

function ButtonIconDemo() {
  const [isLoading, setIsLoading] = createSignal(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
    toastAdd({
      title: "Button clicked!",
      variant: toastVariant.success,
    })
  }

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">ButtonIcon Component</h2>
      <div class="flex flex-wrap gap-4">
        <ButtonIcon icon={mdiHeart} onClick={handleClick}>
          Like
        </ButtonIcon>
        <ButtonIcon icon={mdiLoading} isLoading={isLoading()} onClick={handleClick}>
          Save
        </ButtonIcon>
        <ButtonIcon icon={mdiHeart} iconRight={mdiHeart} variant={buttonVariant.primary}>
          Heart
        </ButtonIcon>
      </div>
    </div>
  )
}

function ButtonIconOnlyDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">ButtonIconOnly Component</h2>
      <div class="flex gap-4">
        <ButtonIconOnly
          icon={mdiHeart}
          title="Like"
          onClick={() => toastAdd({ title: "Liked!", variant: toastVariant.info })}
        />
        <ButtonIconOnly
          icon={mdiHeart}
          title="Favorite"
          variant={buttonVariant.primary}
          onClick={() => toastAdd({ title: "Favorited!", variant: toastVariant.success })}
        />
      </div>
    </div>
  )
}

function ButtonIcon1Demo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">ButtonIcon1 Component</h2>
      <div class="flex flex-wrap gap-4">
        <ButtonIcon1 icon={mdiHeart}>With Icon</ButtonIcon1>
        <ButtonIcon1 iconRight={mdiHeart}>Icon Right</ButtonIcon1>
        <ButtonIcon1 icon={mdiHeart} iconRight={mdiHeart}>
          Both Icons
        </ButtonIcon1>
      </div>
    </div>
  )
}

function ButtonStatesDemo() {
  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Button States</h2>
      <div class="flex flex-wrap gap-4">
        <Button disabled>Disabled</Button>
        <Button variant={buttonVariant.primary} disabled>
          Disabled Primary
        </Button>
        <ButtonIcon isLoading icon={mdiLoading}>
          Loading
        </ButtonIcon>
        <ButtonIconOnly icon={mdiHeart} title="Disabled Icon" isLoading />
      </div>
    </div>
  )
}

function ToggleButtonsDemo() {
  const inDevModeSignal = createSignalObject(false)
  const inTestModeSignal = createSignalObject(false)

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Toggle Buttons</h2>
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold mb-3">ToggleButton</h3>
          <div class="flex flex-wrap gap-4">
            <ToggleButton
              title={inDevModeSignal.get() ? "Dev Mode Active" : "Dev Mode Disabled"}
              pressedSignal={inDevModeSignal}
            >
              {inDevModeSignal.get() ? "Dev Mode: ON" : "Dev Mode: OFF"}
            </ToggleButton>
            <ToggleButton
              title={inTestModeSignal.get() ? "Test Mode Active" : "Test Mode Disabled"}
              pressedSignal={inTestModeSignal}
            >
              {inTestModeSignal.get() ? "Test Mode: ON" : "Test Mode: OFF"}
            </ToggleButton>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-3">ToggleButtonIconOnly</h3>
          <div class="flex gap-4">
            <ToggleButtonIconOnly
              title={"Dev Mode: " + (inDevModeSignal.get() ? "Active" : "Disabled")}
              pressedSignal={inDevModeSignal}
              icon={inDevModeSignal.get() ? mdiCodeJson : mdiCodeBraces}
            />
            <ToggleButtonIconOnly
              title={"Test Mode: " + (inTestModeSignal.get() ? "Active" : "Disabled")}
              pressedSignal={inTestModeSignal}
              icon={inTestModeSignal.get() ? mdiTestTube : mdiTestTubeEmpty}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
