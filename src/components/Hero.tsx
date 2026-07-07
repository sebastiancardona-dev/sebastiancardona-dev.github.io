import { motion, useReducedMotion } from 'motion/react'
import { GithubLogo } from '@phosphor-icons/react'
import { EASE } from './Reveal'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="mx-auto grid min-h-[100dvh] max-w-6xl items-center gap-12 px-4 pt-24 pb-16 sm:px-6 lg:grid-cols-12"
    >
      <div className="lg:col-span-7">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-5xl font-semibold tracking-tighter text-white md:text-6xl lg:text-7xl"
        >
          Systems that <span className="text-accent">stay up</span>.
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
          className="mt-6 max-w-[46ch] text-lg leading-relaxed"
        >
          I'm Sebastian Cardona. Site reliability and backend engineer at
          AutoZone, running cloud infrastructure and microservices on Google
          Cloud.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#experience"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 active:scale-[0.98]"
          >
            View experience
          </a>
          <a
            href="https://github.com/sebastiancardona-dev"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/40"
          >
            <GithubLogo size={18} aria-hidden />
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
        className="lg:col-span-5"
      >
        <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_-24px_rgba(76,194,255,0.25)]">
          <img
            src="/profile.jpg"
            alt="Sebastian Cardona"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
