import { A } from "@solidjs/router"

export function Header() {
  return (
    <header>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <A
        // class={styles.link}
        href="/about"
        activeClass="underlined" // 👈 Add the active class
      >
        About
      </A>
      <A
        // class={styles.link}
        href="/contact"
        activeClass="underlined" // 👈 Add the active class
      >
        Contact
      </A>
    </header>)
}
