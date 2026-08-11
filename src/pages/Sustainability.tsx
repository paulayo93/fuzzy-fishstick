import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { esgPage } from '../data/sustainability'
import { SectionHeading } from '../components/SectionHeading'

export function Sustainability() {
  const { hero, businessConduct, strategy } = esgPage

  return (
    <>
      <section className="relative min-h-[52vh] overflow-hidden pt-[4.5rem]">
        <img
          src={hero.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-6xl items-end px-5 pb-16 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-copper-soft uppercase">
              {hero.eyebrow}
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {hero.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid min-h-[28rem] lg:grid-cols-2">
          <div className="relative min-h-[18rem]">
            <img
              src={businessConduct.image}
              alt="Sustainability and responsible operations"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center bg-surface px-5 py-16 sm:px-10 lg:px-14">
            <SectionHeading
              eyebrow="ESG"
              title={businessConduct.title}
              description={businessConduct.body}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Direction"
            title={strategy.title}
            description={strategy.intro}
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            {strategy.items.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <p className="font-display text-sm font-bold tracking-[0.16em] text-copper uppercase">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-3 text-ink-muted leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Explore our HSE systems
            </h2>
            <p className="mt-3 text-lg text-white/70">
              See how safety, health, environment, and community engagement guide
              every engagement.
            </p>
          </div>
          <Link
            to="/hse"
            className="inline-flex shrink-0 items-center gap-2 bg-copper px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-hover"
          >
            View HSE
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
