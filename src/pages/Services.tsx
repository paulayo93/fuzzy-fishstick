import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { servicesPage } from '../data/services'
import { SectionHeading } from '../components/SectionHeading'

export function Services() {
  const { hero, intro, featured, other } = servicesPage

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
            <p className="mt-4 max-w-xl text-lg text-white/80">{intro}</p>
          </motion.div>
        </div>
      </section>

      {featured.map((service, index) => {
        const imageLeft = index % 2 === 0
        return (
          <section key={service.title} className="relative overflow-hidden">
            <div className="grid min-h-[28rem] lg:grid-cols-2">
              <div
                className={[
                  'relative min-h-[18rem]',
                  imageLeft ? 'lg:order-1' : 'lg:order-2',
                ].join(' ')}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className={[
                  'flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-14',
                  imageLeft ? 'bg-surface lg:order-2' : 'bg-white lg:order-1',
                ].join(' ')}
              >
                <SectionHeading
                  eyebrow="Capability"
                  title={service.title}
                  description={service.description}
                />
                <ul className="mt-6 space-y-3">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="border-l-2 border-copper pl-4 text-ink-muted leading-relaxed"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )
      })}

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="More capabilities"
            title="Other services"
            description="Specialist support across survey, integrity, and subsea project phases."
          />
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {other.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="relative mb-5 aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8">
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
