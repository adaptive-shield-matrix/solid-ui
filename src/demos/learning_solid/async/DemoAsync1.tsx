import { createMemo, createResource, createSignal } from "solid-js"

type SubmitArgs = {
  timestamp: number
  data: string
}

type PendingArgs = {
  args?: SubmitArgs
  pending: boolean
}

/**
 * https://playground.solidjs.com/anonymous/a6712ce2-5661-482c-b994-9b698f1aa537
 */
export function DemoAsync1() {
  // For tracking clicks
  const [clicked, setClicked] = createSignal<number>(-1)
  const startSubmit = () => setClicked(performance.now())

  // Data required for the submit
  const [data] = createResource(function obtainData() {
    return new Promise<{ value: string }>((r) => setTimeout(r, 4000, { value: "crown jewels" }))
  })

  // Assemble submit information.
  const pendingArgs = createMemo((last: PendingArgs | undefined) => {
    // Don't do anything until there is a new, unprocessed click
    // (This function runs whenever *something* it subscribes to changes)
    if (clicked() < 0 || clicked() === last?.args?.timestamp) return last

    // Is the data ready
    if (data.state !== "ready") {
      // subscribe for when it's ready
      const _data = data()
      return {
        args: last?.args,
        pending: true,
      }
    }

    // Now we're finally ready to submit it.
    return {
      args: {
        timestamp: clicked(),
        data: data().value,
      },
      pending: false,
    }
  }, undefined)

  // Derived values are good enough here
  // https://docs.solidjs.com/concepts/derived-values/derived-signals#derived-signals
  const submitArgs = () => pendingArgs()?.args

  // Processing the submit:
  // This resource won't start until it receives a value from `submitArgs`
  // and it will run again when `submitArgs` delivers a new value
  const [processing] = createResource(submitArgs, function processSubmit(args: SubmitArgs) {
    console.log("starting", args.timestamp)
    return new Promise<void>((r) => {
      setTimeout(() => (console.log("done", args.timestamp), r()), 2000)
    })
  })

  const disableClick = () => pendingArgs()?.pending === true || processing.loading

  return (
    <button type="button" onClick={startSubmit} disabled={disableClick()}>
      Submit
    </button>
  )
}

// render(() => <App />, document.getElementById('app')!);
