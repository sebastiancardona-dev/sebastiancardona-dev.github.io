const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#case-studies', label: 'Case studies' },
  { href: '#building', label: 'Building' },
  { href: '#capabilities', label: 'Capabilities' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="font-mono text-sm font-semibold text-accent">SC</span>
          <span className="text-sm font-medium text-zinc-200 max-sm:hidden">
            Sebastian Cardona
          </span>
        </a>
        <nav className="flex items-center gap-7" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white max-md:hidden"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-accent/40 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10 active:scale-[0.98]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
