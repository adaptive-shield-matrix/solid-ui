
export function Header() {
  return (
    <header>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        // class={styles.link}
        href="/about"
        // activeClass="underlined" // 👈 Add the active class
      >
        About
      </a>
      <a
        // class={styles.link}
        href="/contact"
        // activeClass="underlined" // 👈 Add the active class
      >
        Contact
      </a>
    </header>
  )
}
