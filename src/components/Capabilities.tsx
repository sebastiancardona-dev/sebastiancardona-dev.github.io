import { Reveal } from './Reveal'

const groups = [
  {
    name: 'Cloud & platform',
    items: ['Google Cloud', 'AWS', 'Docker', 'Linux', 'Bash', 'Git'],
  },
  {
    name: 'Reliability & DevOps',
    items: [
      'CI/CD',
      'Autoscaling',
      'Observability',
      'Incident response',
      'Elasticsearch',
    ],
  },
  {
    name: 'Backend',
    items: ['Java', 'Spring Boot', 'Python', 'REST APIs', 'Microservices', 'SQL'],
  },
]

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="mx-auto grid max-w-6xl scroll-mt-16 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12"
    >
      <Reveal className="lg:col-span-4">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Capabilities
        </h2>
        <p className="mt-3 max-w-[40ch] leading-relaxed">
          The tools I run in production, grouped by the job they do.
        </p>
      </Reveal>

      <div className="space-y-12 lg:col-span-8">
        {groups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.06}>
            <h3 className="text-lg font-medium text-white">{g.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-ink-900 px-4 py-1.5 text-sm text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
