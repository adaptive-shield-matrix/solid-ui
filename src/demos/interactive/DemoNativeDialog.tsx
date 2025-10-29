import { buttonVariant } from "~ui/interactive/button/buttonCva"
import { NativeDialog } from "~ui/interactive/dialog/NativeDialog"
import { arrCreate } from "~utils/arr/arrCreate"

export function DemoNativeDialog() {
  return (
    <>
      <NativeDialog
        buttonProps={{
          variant: buttonVariant.outline,
          children: "Show dialog",
        }}
        title={"My first dialog"}
      >
        <div class={"flex flex-col gap-20"}>
          {arrCreate(10, (i) => (
            <p>Dialog content {i}</p>
          ))}
        </div>
      </NativeDialog>
      <NativeDialog
        buttonProps={{
          variant: buttonVariant.outline,
          children: "Show Nested Dialog",
        }}
        title={"Nested Dialog"}
      >
        <NativeDialog
          buttonProps={{
            variant: buttonVariant.outline,
            children: "Inside a nested Dialog",
          }}
          title={"Inside a nested Dialog"}
        >
          tada!
        </NativeDialog>
      </NativeDialog>
    </>
  )
}
