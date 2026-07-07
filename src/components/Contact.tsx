import { FileText, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { Reveal } from './Reveal'

const links = [
  {
    href: 'https://www.linkedin.com/in/sebastiancardonadev/',
    label: 'LinkedIn',
    Icon: LinkedinLogo,
  },
  { href: 'https://github.com/sebastiancardona-dev', label: 'GitHub', Icon: GithubLogo },
  { href: '/resume.pdf', label: 'Résumé', Icon: FileText },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-24 pb-12 sm:px-6">
      <Reveal>
        <h2 className="max-w-[16ch] text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Let's build something reliable.
        </h2>
        <a
          href="mailto:contact@sebastiancardona.dev"
          className="mt-8 inline-block text-xl font-medium text-accent underline-offset-8 transition hover:underline md:text-2xl"
        >
          contact@sebastiancardona.dev
        </a>
        <ul className="mt-10 flex flex-wrap gap-4">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
              >
                <Icon size={18} aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-zinc-600">
        <span>© 2026 Sebastian Cardona</span>
        <span>Chihuahua, México</span>
      </footer>
    </section>
  )
}
