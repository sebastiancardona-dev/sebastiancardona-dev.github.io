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
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 via-ink-900 to-ink-900 p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">
                Portal — an ops dashboard that discovers its own ecosystem
              </h3>
              <span className="rounded-full border border-accent/30 px-3 py-1 font-mono text-xs text-accent">
                Live
              </span>
            </div>
            <p className="mt-4 max-w-[58ch] leading-relaxed">
              Single pane of glass for every app on the platform: health, versions,
              deploy history, host and per-container stats on a drag-and-drop widget
              grid — plus the identity provider&apos;s admin console (users, invites,
              audit). Apps are discovered from deploy state and Docker labels; adding
              app #8 requires zero portal changes. SSO-gated, recruiters welcome
              read-only.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <Metric>zero-config app discovery</Metric>
              <Metric>observer ≈ 10% of the observed</Metric>
              <Metric>monitors itself, no special-casing</Metric>
              <Metric>read-only by construction</Metric>
            </ul>
            <div className="mt-auto flex flex-wrap gap-6 pt-8">
              <CardLink href="https://portal.sebastiancardona.dev">Live app</CardLink>
              <CardLink href="https://github.com/sebastiancardona-dev/portal/blob/main/docs/CASE-STUDY.md">
                Read the case study
              </CardLink>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-2">
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 via-ink-900 to-ink-900 p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">
                Ecosystem SSO — swapping the identity provider of a live app
              </h3>
              <span className="rounded-full border border-accent/30 px-3 py-1 font-mono text-xs text-accent">
                Live
              </span>
            </div>
            <p className="mt-4 max-w-[58ch] leading-relaxed">
              An OAuth2 / OIDC provider built on Spring Authorization Server,
              proven the only way that counts: migrating MoneyTrckr — live, with
              real users and real financial data — onto it via a
              backend-for-frontend. The SPA-holds-tokens plan died to a
              five-minute probe; the BFF shipped with sessions that survive
              deploys, and four bugs only a deployed environment could reveal
              are written up, not hidden.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <Metric>IdP swapped, zero controller changes</Metric>
              <Metric>plan A killed by a 5-min probe</Metric>
              <Metric>sessions survive deploys</Metric>
              <Metric>4 bugs only prod could teach</Metric>
            </ul>
            <div className="mt-auto flex flex-wrap gap-6 pt-8">
              <CardLink href="https://github.com/sebastiancardona-dev/sebastiancardona-dev.github.io/blob/main/case-studies/sso/CASE-STUDY.md">
                Read the case study
              </CardLink>
              <CardLink href="https://github.com/sebastiancardona-dev/auth-service">
                Provider source
              </CardLink>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.24}>
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900 p-8">
            <h3 className="text-xl font-semibold text-white">
              Own OAuth2 / OIDC identity provider
            </h3>
            <p className="mt-4 leading-relaxed">
              One login for the whole ecosystem: code + PKCE only, DB-backed JWKS
              rotation, invite-gated registration with a full audit trail, and a
              headless admin API whose UI lives in the portal. MoneyTrckr and the
              portal sign in through it in production.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <Metric>PKCE-only, RFC 9700 posture</Metric>
              <Metric>signing keys survive redeploys</Metric>
              <Metric>per-app last-used tracking</Metric>
            </ul>
            <div className="mt-auto flex flex-wrap gap-6 pt-8">
              <CardLink href="https://github.com/sebastiancardona-dev/auth-service/blob/main/CASE-STUDY.md">
                Case study
              </CardLink>
              <CardLink href="https://github.com/sebastiancardona-dev/auth-service">
                Source
              </CardLink>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.28} className="lg:col-span-3">
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
