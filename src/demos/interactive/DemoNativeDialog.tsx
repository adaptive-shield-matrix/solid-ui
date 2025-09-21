import { buttonVariant } from "~/interactive/button/buttonCva.ts"
import { NativeDialog } from "~/interactive/dialog/NativeDialog.tsx"
import { arrCreate } from "~/utils/arr/arrCreate.ts"
import "./NativeDialog.module.css"

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
