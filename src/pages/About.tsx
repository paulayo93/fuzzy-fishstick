import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { company, values } from '../data/company'
import {
  clientLogos,
  isoBadges,
  leadership,
  missionVision,
  uniquePoints,
} from '../data/about'
import { HoverRevealImage } from '../components/HoverRevealImage'
import { SectionHeading } from '../components/SectionHeading'

const HERO_IMAGE = '/about/leadership/wellington.jpg'
const APPROACH_IMAGE = '/about/leadership/chris.png'

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
          <SectionHeading
            eyebrow="Who we are"
            title={`Who ${company.shortName} is`}
            description={`${company.name} is an integrated provider of mud engineering and fluids support services to oil and gas operators in Nigeria — spanning mud systems, completion fluids, filtration, solids control, and supply & logistics.`}
          />
          <p className="mt-6 max-w-3xl text-ink-muted leading-relaxed">
            We were founded to close the gap between paper excellence and site
            reality. Our teams bring disciplined project control and a culture
            that treats safety and schedule as equal obligations — not
            trade-offs.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What makes us unique"
            title="Why operators choose us"
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
            alt="Ovwspelo operations leadership"
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
                className="border-l-2 border-copper bg-surface px-6 py-8"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-12 w-12 object-contain"
                />
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
            eyebrow="Quality & HSE"
            title="Standards we work toward"
            description={`${company.shortName} is committed to consistent quality, a safe working environment, and responsible environmental practice across mud engineering and fluids operations.`}
          />
          <p className="mt-6 max-w-3xl text-ink-muted leading-relaxed">
            Our integrated approach to risk management, regulatory compliance,
            and continual improvement is guided by internationally recognized
            management system frameworks — including quality (ISO 9001),
            occupational health & safety (ISO 45001), and environmental
            management (ISO 14001).
          </p>
          <ul className="mt-12 flex flex-wrap items-end justify-center gap-8 sm:gap-12">
            {isoBadges.map((badge) => (
              <li key={badge.name} className="w-28 sm:w-36">
                <img
                  src={badge.src}
                  alt={badge.name}
                  className="h-auto w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Experienced professionals dedicated to performance"
            description={`${company.shortName} is led by people committed to safety, delivery, and long-term value creation.`}
          />
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <HoverRevealImage
                  src={person.image}
                  alt={person.name}
                  className="aspect-[4/5] w-full"
                />
                <h3 className="mt-5 font-display text-xl font-bold text-navy">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-[0.12em] text-copper uppercase">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {person.bio}
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
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {clientLogos.map((logo) => (
              <li
                key={logo.name}
                className="flex h-14 w-28 items-center justify-center sm:h-16 sm:w-32"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
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
