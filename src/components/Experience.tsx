import { Reveal } from './Reveal'

const stats = [
  { value: '99.999%', label: 'uptime SLA held on a tier-5 platform' },
  { value: '2', label: 'production incidents in 13 months' },
  { value: '1,500+', label: 'employees served by a platform I built on' },
  { value: '~50', label: 'support cases resolved monthly' },
]

const roles = [
  {
    period: 'Feb 2026 - Present',
    title: 'Systems Engineer',
    org: 'AutoZone · I.T. Commercial',
    desc: 'Owning backend services and cloud infrastructure: scalable architecture, REST APIs, and SRE practice (CI/CD, containers, autoscaling, observability) across Google Cloud.',
  },
  {
    period: 'Jan 2025 - Feb 2026',
    title: 'Associate Systems Engineer',
    org: 'AutoZone · I.T. Marketing DevOps',
    desc: 'Migrated a critical customer service platform to GCP, a tier-5 system handling thousands of account operations daily, and kept it at its 99.999% uptime SLA.',
  },
  {
    period: 'May 2024 - Jan 2025',
    title: 'Backend Development Intern',
    org: 'AutoZone · I.T. Marketing',
    desc: 'Built Spring Boot microservices and admin tooling for AutoZone CareerPath, an HR platform now serving 1,500+ employees.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Experience
        </h2>
        <p className="mt-3 max-w-[55ch] leading-relaxed">
          Two years at AutoZone, promoted from intern to mid-level engineer.
          The numbers I'm accountable for:
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={i * 0.06}>
            <p className="font-mono text-4xl font-semibold text-white md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.label}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 divide-y divide-white/5 border-t border-white/5">
        {roles.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <article className="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
              <p className="font-mono text-xs text-zinc-500 md:col-span-3 md:pt-1.5">
                {r.period}
              </p>
              <div className="md:col-span-9">
                <h3 className="text-xl font-medium text-white">{r.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{r.org}</p>
                <p className="mt-3 max-w-[65ch] leading-relaxed">{r.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
