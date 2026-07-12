import { ArrowSquareOut } from '@phosphor-icons/react'
import { Reveal } from './Reveal'

function CardLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-white"
    >
      {children}
      <ArrowSquareOut size={15} aria-hidden />
    </a>
  )
}

function Metric({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-white/10 bg-ink-950/60 px-3.5 py-1 font-mono text-xs text-zinc-300">
      {children}
    </li>
  )
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Case studies
        </h2>
        <p className="mt-3 max-w-[52ch] leading-relaxed">
          A self-hosted production ecosystem I run end to end — built like a
          platform team would, on a fixed budget. Every project ships with a
          written case study: problem, constraints, trade-offs, results.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 via-ink-900 to-ink-900 p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">
                MoneyTrckr — a year of family finance, in production
              </h3>
              <span className="rounded-full border border-accent/30 px-3 py-1 font-mono text-xs text-accent">
                Live · flagship
              </span>
            </div>
            <p className="mt-4 max-w-[58ch] leading-relaxed">
              Full-stack replacement for a battle-tested Excel budget: plan the
              whole year forward, confirm reality against the plan, and read a
              live accumulated balance that turns red before the money does.
              Spring Boot + React PWA, invite-only, shared budgets with a full
              audit trail, at-rest encryption, and a CSV importer that proves
              every balance against the original sheet before writing a row.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <Metric>292-row real sheet replayed to the cent</Metric>
              <Metric>empty repo → prod in 3 days</Metric>
              <Metric>51 automated tests</Metric>
              <Metric>unverified API calls die at the proxy</Metric>
            </ul>
            <div className="mt-auto flex flex-wrap gap-6 pt-8">
              <CardLink href="https://moneytrckr.sebastiancardona.dev">Live app</CardLink>
              <CardLink href="https://github.com/sebastiancardona-dev/sebastiancardona-dev.github.io/blob/main/case-studies/moneytrckr/CASE-STUDY.md">
                Read the case study
              </CardLink>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900 p-8">
            <h3 className="text-xl font-semibold text-white">
              CI/CD with gated promotion &amp; auto-rollback
            </h3>
            <p className="mt-4 leading-relaxed">
              One immutable image per release, gated through a testing env
              before prod, where a failed health check rolls itself back.
              Proven with deliberate failure drills.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <Metric>prod self-healed in 69s</Metric>
              <Metric>onboarding: 2 small files</Metric>
            </ul>
            <div className="mt-auto flex flex-wrap gap-6 pt-8">
              <CardLink href="https://github.com/sebastiancardona-dev/workflows/blob/main/CASE-STUDY.md">
                Case study
              </CardLink>
              <CardLink href="https://github.com/sebastiancardona-dev/workflows">
                Source
              </CardLink>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900 p-8">
            <h3 className="text-xl font-semibold text-white">Swiss Tool of Dev</h3>
            <p className="mt-4 leading-relaxed">
              A fully client-side developer toolbox: themes, favorites and
              settings live in one portable JSON in <em>your</em> browser.
              Zero backend, zero telemetry — privacy by architecture.
            </p>
            <div className="mt-auto flex flex-wrap gap-6 pt-8">
              <CardLink href="https://tools.sebastiancardona.dev">Live app</CardLink>
              <CardLink href="https://github.com/sebastiancardona-dev/swiss-dev-tools/blob/main/case-study/CASE-STUDY.md">
                Case study
              </CardLink>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.16} className="lg:col-span-2">
          <article className="rounded-2xl border border-white/10 bg-ink-900 p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">
                The foundation underneath
              </h3>
              <span className="font-mono text-xs text-zinc-500">
                private infra repo — written up, available on request
              </span>
            </div>
            <p className="mt-4 max-w-[70ch] leading-relaxed">
              Hardened VPS, Traefik with wildcard TLS via DNS-01, Cloudflare at
              the edge, firewall enforced outside the host (Docker bypasses
              UFW — naming the foot-gun is the point). Every manual step is
              recorded, so the whole platform rebuilds from one repo and two
              secrets.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <Metric>€6.49/mo all-in, fixed</Metric>
              <Metric>TLS everywhere, key-only SSH</Metric>
              <Metric>empty account → serving TLS in one day</Metric>
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
