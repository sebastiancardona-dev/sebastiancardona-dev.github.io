import { Reveal } from './Reveal'

export function Building() {
  return (
    <section id="building" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Building now
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 via-ink-900 to-ink-900 p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">MoneyTrckr</h3>
              <span className="rounded-full border border-accent/30 px-3 py-1 font-mono text-xs text-accent">
                In development
              </span>
            </div>
            <p className="mt-4 max-w-[55ch] text-lg leading-relaxed">
              Personal finance without the spreadsheet: the clarity of a
              well-built finance dashboard, in an app anyone can use. Early
              stage, and the project I'm putting my evenings into.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="h-full rounded-2xl border border-white/10 bg-ink-900 p-8">
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-xl font-semibold text-white">
                Google Cloud certification
              </h3>
              <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-zinc-400">
                Preparing
              </span>
            </div>
            <p className="mt-4 leading-relaxed">
              Formalizing two years of hands-on GCP work, starting with the
              Cloud Practitioner exam.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
