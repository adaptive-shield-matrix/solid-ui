import { mdiHeart, mdiLoading } from "@mdi/js"
import { createSignal } from "solid-js"
import { Button } from "~ui/interactive/button/Button.tsx"
import { ButtonIcon } from "~ui/interactive/button/ButtonIcon.tsx"
import { ButtonIcon1 } from "~ui/interactive/button/ButtonIcon1.tsx"
import { ButtonIconOnly } from "~ui/interactive/button/ButtonIconOnly.tsx"
import { buttonSize, buttonVariant } from "~ui/interactive/button/buttonCva.ts"
import { toastAdd } from "~ui/interactive/toast/toastAdd.ts"
import { toastVariant } from "~ui/interactive/toast/toastVariant.ts"

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
        {variants.map(variant => (
          <Button variant={variant}>
            {variant}
          </Button>
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
        {sizes.map(size => (
          <Button size={size}>
            Size {size}
          </Button>
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
      variant: toastVariant.success
    })
  }

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">ButtonIcon Component</h2>
      <div class="flex flex-wrap gap-4">
        <ButtonIcon icon={mdiHeart} onClick={handleClick}>
          Like
        </ButtonIcon>
        <ButtonIcon
          icon={mdiLoading}
          isLoading={isLoading()}
          onClick={handleClick}
        >
          Save
        </ButtonIcon>
        <ButtonIcon
          icon={mdiHeart}
          iconRight={mdiHeart}
          variant={buttonVariant.primary}
        >
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
        <ButtonIcon1 icon={mdiHeart}>
          With Icon
        </ButtonIcon1>
        <ButtonIcon1 iconRight={mdiHeart}>
          Icon Right
        </ButtonIcon1>
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
        <ButtonIconOnly
          icon={mdiHeart}
          title="Disabled Icon"
          isLoading
        />
      </div>
    </div>
  )
}
