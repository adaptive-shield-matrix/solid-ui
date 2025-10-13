import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { classMerge } from "~ui/utils/ui/classMerge"

const Table: Component<ComponentProps<"table">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return (
    <div class={"relative w-full overflow-auto"}>
      <table class={classMerge("w-full caption-bottom text-sm", p.class)} {...rest} />
    </div>
  )
}

const TableHeader: Component<ComponentProps<"thead">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return <thead class={classMerge("[&_tr]:border-b", p.class)} {...rest} />
}

const TableBody: Component<ComponentProps<"tbody">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return <tbody class={classMerge("[&_tr:last-child]:border-0", p.class)} {...rest} />
}

const TableFooter: Component<ComponentProps<"tfoot">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return <tfoot class={classMerge("bg-primary text-primary-foreground font-medium", p.class)} {...rest} />
}

const TableRow: Component<ComponentProps<"tr">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return (
    <tr
      class={classMerge("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", p.class)}
      {...rest}
    />
  )
}

const TableHead: Component<ComponentProps<"th">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return (
    <th
      class={classMerge(
        "text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
        p.class,
      )}
      {...rest}
    />
  )
}

const TableCell: Component<ComponentProps<"td">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return <td class={classMerge("p-4 align-middle [&:has([role=checkbox])]:pr-0", p.class)} {...rest} />
}

const TableCaption: Component<ComponentProps<"caption">> = (p) => {
  const [, rest] = splitProps(p, ["class"])
  return <caption class={classMerge("text-muted-foreground mt-4 text-sm", p.class)} {...rest} />
}

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
