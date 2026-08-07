import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Drill, Droplets, Filter, Settings, Truck } from 'lucide-react'
import { company, services } from '../data/company'
import { HeroBackgroundCarousel } from '../components/HeroBackgroundCarousel'
import { SectionHeading } from '../components/SectionHeading'

const iconMap = {
  Drill,
  Droplets,
  Filter,
  Settings,
  Truck,
} as const

const HERO_IMAGES = [
  'https://nemstecservices.com/wp-content/uploads/2022/05/nemsbg4.png',
  'https://nemstecservices.com/wp-content/uploads/2022/05/nemsbg6.png',
  'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1473341302520-8b7443bcbba0?auto=format&fit=crop&w=2000&q=80',
]

const CAPABILITY_IMAGE =
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80'

export function Home() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <HeroBackgroundCarousel images={HERO_IMAGES} />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-navy-deep/95 via-navy/85 to-navy/55" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,rgba(196,92,38,0.18),transparent_55%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              {company.name}
            </h1>
            <p className="mt-5 max-w-xl text-xl text-white/85 sm:text-2xl">
              {company.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-copper px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-hover"
              >
                Start a conversation
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
              >
                About the company
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we do"
            description="Ovwspelo provides Mud Engineering, Completion Fluids, Filtration Services, Solids Control, and Supply & Logistics — specialized, experience-backed support for oil companies in Nigeria."
          />

          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.li
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="flex gap-4"
                >
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-copper-soft">
                    <Icon size={22} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-ink-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid min-h-[28rem] lg:grid-cols-2">
          <div className="relative min-h-[18rem]">
            <img
              src={CAPABILITY_IMAGE}
              alt="Engineers reviewing project plans on site"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center bg-steel px-5 py-16 sm:px-10 lg:px-14">
            <SectionHeading
              eyebrow="Approach"
              title="Precision in planning. Certainty in delivery."
              description="We align engineering, procurement, and field execution early — so risk surfaces before it costs time, capital, or trust."
              light
            />
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-copper-soft transition-colors hover:text-white"
            >
              How we work
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to engineer the next phase?
            </h2>
            <p className="mt-3 text-lg text-white/70">
              Tell us about your project. We will respond with clarity and a
              practical next step.
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
