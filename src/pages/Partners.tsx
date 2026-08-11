import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { partnersPage } from '../data/stakeholders'
import { SectionHeading } from '../components/SectionHeading'

export function Partners() {
  const { hero, international, local } = partnersPage

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
            <p className="mt-4 max-w-xl text-lg text-white/80">
              {hero.description}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-copper px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-hover"
            >
              Become a partner
              <ArrowRight size={16} aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid min-h-[28rem] lg:grid-cols-2">
          <div className="relative min-h-[18rem]">
            <img
              src={international.image}
              alt="International partnership"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center bg-surface px-5 py-16 sm:px-10 lg:px-14">
            <SectionHeading
              eyebrow="Global"
              title={international.title}
              description={international.body}
            />
            <Link
              to="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-copper transition-colors hover:text-copper-hover"
            >
              Become a partner
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid min-h-[28rem] lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-white px-5 py-16 sm:px-10 lg:order-1 lg:px-14">
            <SectionHeading
              eyebrow="Local"
              title={local.title}
              description={local.body}
            />
            <Link
              to="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-copper transition-colors hover:text-copper-hover"
            >
              Become a partner
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="relative min-h-[18rem] lg:order-2">
            <img
              src={local.image}
              alt="Local partnership"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to partner with Ovwspelo?
            </h2>
            <p className="mt-3 text-lg text-white/70">
              Reach out to explore market entry, vessel support, or joint
              delivery opportunities.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-copper px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-hover"
          >
            Contact us
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
