import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { servicesPage } from '../data/services'
import { SectionHeading } from '../components/SectionHeading'
import { HoverRevealImage } from '../components/HoverRevealImage'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease },
  }),
}

export function Services() {
  const { hero, intro, items } = servicesPage
  const [leadA, leadB, leadC, leadD, ...rest] = items


  return (
    <>
      <div className="flex flex-col gap-2 overflow-hidden bg-white sm:gap-3">
        <section className="relative min-h-[58vh] overflow-hidden pt-[4.5rem]">
          <motion.img
            src={hero.image}
            alt=""
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/80 to-navy/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(196,92,38,0.16),transparent_55%)]" />

          <div className="relative mx-auto flex min-h-[58vh] max-w-6xl items-end px-5 pb-16 sm:px-8 sm:pb-20">
            <div className="max-w-2xl">
              <motion.p
                custom={0.05}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="text-sm font-semibold tracking-[0.18em] text-copper-soft uppercase"
              >
                {hero.eyebrow}
              </motion.p>
              <motion.h1
                custom={0.14}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                {hero.title}
              </motion.h1>
              <motion.p
                custom={0.24}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-5 max-w-xl text-lg leading-relaxed text-white/80"
              >
                {intro}
              </motion.p>
            </div>
          </div>
        </section>

        {[leadA, leadB, leadC, leadD].map((service, index) => (
          <motion.article
            key={service.title}
            tabIndex={0}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: index * 0.08, ease }}
            className="group relative isolate min-h-[min(70vh,36rem)] overflow-hidden outline-none"
          >
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110 group-focus-within:scale-110"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-navy/75 transition-opacity duration-700 ease-out group-hover:opacity-0 group-focus-within:opacity-0"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70 group-focus-within:opacity-70"
            />

            <div className="relative z-10 mx-auto flex min-h-[min(70vh,36rem)] max-w-6xl items-end px-5 py-14 sm:px-8 sm:py-20">
              <div
                className={[
                  'max-w-xl transition-transform duration-700 ease-out group-hover:-translate-y-1',
                  index % 2 === 1 ? 'lg:ml-auto lg:text-right' : '',
                ].join(' ')}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-copper-soft uppercase">
                  Capability
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  {service.title}
                </h2>
                <p
                  className={[
                    'mt-4 text-lg leading-relaxed text-white/80',
                    index % 2 === 1 ? 'lg:ml-auto' : '',
                  ].join(' ')}
                >
                  {service.summary}
                </p>
                <span
                  className={[
                    'mt-6 inline-block h-0.5 w-12 bg-copper transition-all duration-700 ease-out group-hover:w-24',
                    index % 2 === 1 ? 'lg:ml-auto' : '',
                  ].join(' ')}
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease }}
          >
            <SectionHeading
              eyebrow="More capabilities"
              title="Supporting services"
              description="Focused support across supply & logistics and project management — built for efficient programs."
            />
          </motion.div>

          <ul className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
            {rest.map((service, index) => (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.08, ease }}
                className="group"
              >
                <HoverRevealImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-[4/3] w-full"
                />
                <div className="mt-5 transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                  <h3 className="font-display text-xl font-bold text-navy transition-colors duration-300 group-hover:text-steel">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-ink-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,92,38,0.14),transparent_50%)]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease }}
          className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need a tailored scope?
            </h2>
            <p className="mt-3 text-lg text-white/70">
              Tell us about your project. We will respond with a practical next
              step.
            </p>
          </div>
          <Link
            to="/contact"
            className="group/cta inline-flex shrink-0 items-center gap-2 bg-copper px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-hover"
          >
            Contact us
            <ArrowRight
              size={16}
              aria-hidden
              className="transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
