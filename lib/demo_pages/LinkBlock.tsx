import { BulletLinks } from "~/interactive/list/BulletLinks.tsx";

export function LinkBlock(p: { header: string; removeUrlPrefix: string; links: string[] }) {
  return (
    <>
      <h2 class={"text-xl font-semibold"}>{p.header}</h2>
      <div class={"flex flex-col"}>
        <BulletLinks removeUrlPrefix={p.removeUrlPrefix} urls={p.links} />
      </div>
    </>
  )
}
