import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { company, values } from '../data/company'
import { clientLogos, missionVision, uniquePoints, whoWeAre } from '../data/about'
import { HoverRevealImage } from '../components/HoverRevealImage'
import { SectionHeading } from '../components/SectionHeading'

const HERO_IMAGE = '/images/hse-hero.png'
const APPROACH_IMAGE = '/images/hse-2.png'

export function About() {
  return (
    <>
      <section className="relative min-h-[52vh] overflow-hidden pt-[4.5rem]">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-navy/60" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-6xl items-end px-5 pb-16 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="font-display text-sm font-bold tracking-[0.2em] text-copper-soft uppercase">
              {company.shortName}
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Built for the energy industry&apos;s hardest problems
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Mud engineering, completion fluids, and field support you can
              trust when well performance matters.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading title="Who we are" />
          <div className="mt-6 max-w-3xl space-y-4 text-ink-muted leading-relaxed">
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            title="What makes us unique"
            description="Five strengths that shape how we hire, plan, and deliver in the field."
          />
          <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {uniquePoints.map((point, index) => (
              <motion.li
                key={point.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <p className="font-display text-sm font-bold tracking-[0.16em] text-copper uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                  {point.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  {point.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our operational approach"
              title="Listen closely. Deliver precisely."
              description="We leverage experienced specialist teams and proven fluids technology to respond quickly with quality, efficiency, and job integrity."
            />
            <p className="mt-6 text-ink-muted leading-relaxed">
              We map bespoke solutions around each client&apos;s well program —
              safe, efficient, and cost-effective, with minimal disruption to
              operations and zero compromise on people or assets.
            </p>
          </div>
          <HoverRevealImage
            src={APPROACH_IMAGE}
            alt="Ovwspelo field operations"
            className="aspect-[4/3] w-full"
          />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Purpose"
            title="Mission & vision"
            description="What we chase every day, and where we are headed."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[missionVision.mission, missionVision.vision].map((item) => (
              <div
                key={item.title}
                className="bg-surface px-6 py-8"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-navy">
                  <img
                    src={item.icon}
                    alt=""
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Culture"
              title="What guides every engagement"
              description="Four principles shape how we hire, plan, and deliver."
              light
            />
            <img
              src="/about/icons/culture.png"
              alt=""
              className="h-14 w-14 shrink-0 object-contain opacity-90"
            />
          </div>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.li
                key={value.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <p className="font-display text-sm font-bold tracking-[0.16em] text-copper-soft uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-white/75 leading-relaxed">
                  {value.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our clients"
            title="Trusted by leading operators"
            description="We partner with operators who trust us to deliver reliable fluids and field solutions."
            align="center"
          />
        </div>
        <div className="mt-14 overflow-hidden">
          <ul className="animate-client-marquee flex w-max items-center gap-x-14 sm:gap-x-20">
            {[0, 1].flatMap((set) =>
              clientLogos.map((logo) => (
                <li
                  key={`${logo.name}-${set}`}
                  aria-hidden={set === 1 ? true : undefined}
                  className="flex h-20 w-40 shrink-0 items-center justify-center sm:h-24 sm:w-48"
                >
                  <img
                    src={logo.src}
                    alt={set === 0 ? logo.name : ''}
                    className="max-h-full max-w-full object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              )),
            )}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to talk about your next well program?
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              Reach out for enquiries, technical support, or partnership
              opportunities.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-copper px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-hover"
          >
            Contact us
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
