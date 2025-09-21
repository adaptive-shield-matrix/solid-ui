import { mdiAccount, mdiAlert, mdiCheck, mdiDoor, mdiHelp, mdiHome, mdiInformation, mdiSend } from "@mdi/js"
import { pathDemos } from "~/demo_pages/pathDemos"
import { ct1 } from "~/i18n/ct0.ts"
import { t4Form } from "~/input/form/t4Form.ts"
import { Button } from "~/interactive/button/Button.tsx"
import { type ButtonVariant, buttonVariant } from "~/interactive/button/buttonCva.ts"
import { ButtonIcon } from "~/interactive/button/ButtonIcon.tsx"
import { ButtonIconOnly } from "~/interactive/button/ButtonIconOnly.tsx"
import { LinkButton } from "~/interactive/link/LinkButton.tsx"
import { toastAdd } from "~/interactive/toast/toastAdd.ts"
import { type ToastVariant, toastVariant } from "~/interactive/toast/toastVariant.ts"
import { classArr } from "~/utils/ui/classArr"

export function DemoButtons() {
  return (
    <div class={"p-4 flex flex-wrap justify-start gap-4"}>
      <Buttons />
      <ButtonsIconSizes />
      <ButtonsIconLogic />
      <DemoLinkButtons />
      <DemoIconOnlyButtons />
      {/*<DemoValidationButtonsIcon />*/}
    </div>
  )
}

const variants = Object.values(buttonVariant)
type VariantType = ButtonVariant

const sizes = ["minimal", "sm", "default", "lg"] as const
type SizeType = (typeof sizes)[number]

const tableC = classArr("relative", "h-max w-max", "self-center justify-self-center", "[&_:where(th,td)]:p-2")

function Buttons() {
  return (
    <div class={"flex flex-col items-start"}>
      <h2 class={"text-center text-3xl font-bold"}>Buttons: sizes</h2>
      <table class={tableC}>
        <thead>
          <tr>
            <th />
            {sizes.map((size) => (
              <th scope="col">{size}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, i) => (
            <tr>
              <th scope="row">{variant || "default"}</th>
              {sizes.map((size) => (
                <td>
                  <Button variant={variant} size={size}>
                    Button {variant} {size}
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ButtonsIconSizes() {
  return (
    <div class={"flex flex-col items-start"}>
      <h2 class={"text-center text-3xl font-bold"}>ButtonIcon: sizes</h2>
      <table class={tableC}>
        <thead>
          <tr>
            <th />
            {sizes.map((size) => (
              <th scope="col">{size}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, i) => (
            <tr>
              <th scope="row">{variant || "default"}</th>
              {sizes.map((size) => (
                <td>
                  <ButtonIcon variant={variant} size={size} icon={getIconPath(i)}>
                    Button {variant} {size}
                  </ButtonIcon>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ButtonsIconLogic() {
  function onClick() {
    toastAdd({ title: "clicked", variant: toastVariant.info })
  }
  function onClick2(variant: ToastVariant) {
    toastAdd({ title: "clicked", variant })
  }
  const validationMessage = ct1(t4Form.Missing_x, "Name")
  return (
    <div class={"flex flex-col items-start"}>
      <h2 class={"text-center text-3xl font-bold"}>ButtonIcon: logic</h2>
      <table class={tableC}>
        <thead>
          <tr>
            <th />
            <th>default</th>
            <th>loading</th>
            <th>validation</th>
            <th>icon end</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, i) => (
            <tr>
              <th scope="row">{variant || "default"}</th>
              <td>
                <ButtonIcon variant={variant} icon={getIconPath(i)} onClick={onClick}>
                  Button icon
                </ButtonIcon>
              </td>
              <td>
                <ButtonIcon variant={variant} isLoading onClick={onClick}>
                  Button loading
                </ButtonIcon>
              </td>
              <td>
                <ButtonIcon variant={variant} validationMessage={validationMessage} onClick={onClick}>
                  Button validation
                </ButtonIcon>
              </td>
              <td>
                <ButtonIcon variant={variant} iconRight={getIconPath(i)} onClick={onClick}>
                  Button icon end
                </ButtonIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const linkSizes = ["default", "minimal"] as const
type LinkSizeType = (typeof linkSizes)[number]

function DemoLinkButtons() {
  const url = `${pathDemos}uiShadcn/DemoButtons`

  return (
    <div class={"flex flex-col items-start"}>
      <h2 class={"text-center text-3xl font-bold"}>LinkButton</h2>
      <table class={tableC}>
        <thead>
          <tr>
            <th />
            {linkSizes.map((size) => (
              <th scope="col">{size}</th>
            ))}
            <th>icon start</th>
            <th>icon end</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, i) => (
            <tr>
              <th scope="row">{variant || "default"}</th>
              {linkSizes.map((size) => (
                <th scope="col">
                  <LinkButton href={url} variant={variant} size={size}>
                    LinkButton
                  </LinkButton>
                </th>
              ))}
              <td>
                <LinkButton href={url} variant={variant} icon={getIconPath(i)}>
                  LinkButtonIcon start
                </LinkButton>
              </td>
              <td>
                <LinkButton href={url} variant={variant} iconRight={getIconPath(i)}>
                  LinkButtonIcon end
                </LinkButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function DemoIconOnlyButtons() {
  return (
    <div class={"flex flex-col items-start"}>
      <h2 class={"text-center text-3xl font-bold"}>ButtonIconOnly</h2>
      <table class={tableC}>
        <thead>
          <tr>
            <th />
            {sizes.map((size) => (
              <th scope="col">{size}</th>
            ))}
            <th>loading</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, i) => (
            <tr>
              <th scope="row">{variant || "default"}</th>
              {sizes.map((size) => (
                <td>
                  <ButtonIconOnly
                    icon={getIconPath(i)}
                    variant={variant}
                    size={size}
                    title={`Button ${variant} ${size}`}
                  />
                </td>
              ))}
              <td>
                isLoading
                <ButtonIconOnly icon={getIconPath(i)} variant={variant} title={`Button ${variant} loading`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// function DemoValidationButtonsIcon() {
//   function onClick() {
//     showToast({ title: "clicked", variant: toastVariant.info })
//   }
//   const validationMessage = ct1(t4Form.Missing_x, "Name")
//
//   const validations = ["", validationMessage]
//
//   return (
//     <div class={"flex flex-col items-start"}>
//       <h2 class={"text-center text-3xl font-bold"}>ValidationButtonIcon</h2>
//       <table class={tableC}>
//         <thead>
//         <tr>
//           <th />
//           <th scope="col">default</th>
//           <th scope="col">validation</th>
//           <th>loading</th>
//         </tr>
//         </thead>
//         <tbody>
//         {variants.map((variant, i) => (
//           <tr>
//             <th scope="row">
//               {variant || "default"}
//             </th>
//             {validations.map((v) => (
//               <td key={v ?? "default"}>
//                 <ValidationButtonIcon
//                   icon={getIconPath(i)}
//                   variant={variant}
//                   title={`Button ${variant} ${v}`}
//                   validationMessage={v}
//                   onClick={onClick}
//                   // size={size}
//                 />
//               </td>
//             ))}
//             <td key={"loading"}>
//               <ValidationButtonIcon
//                 icon={getIconPath(i)}
//                 variant={variant}
//                 title={`Button ${variant} loading`}
//                 isLoading
//                 onClick={onClick}
//               />
//             </td>
//           </tr>
//         ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

function getIconPath(i: number) {
  const icons = [mdiHelp, mdiHome, mdiAlert, mdiSend, mdiCheck, mdiAccount, mdiInformation, mdiDoor]
  return icons.at(i % icons.length) as string
}
