import { motion } from 'framer-motion'
import { company, values } from '../data/company'
import { SectionHeading } from '../components/SectionHeading'

const ABOUT_HERO =
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80'

const domains = [
  'Process & facilities engineering',
  'Mechanical & piping design',
  'Electrical & instrumentation',
  'Project controls & planning',
  'Quality assurance & inspection',
  'Operations readiness support',
]

export function About() {
  return (
    <>
      <section className="relative min-h-[52vh] overflow-hidden pt-[4.5rem]">
        <img
          src={ABOUT_HERO}
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
              About
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Built for the energy industry&apos;s hardest problems
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={`Who ${company.shortName} is`}
              description={`${company.name} partners with operators and contractors who need engineering that is rigorous in design and reliable in the field. We were founded to close the gap between paper excellence and site reality.`}
            />
            <p className="mt-6 max-w-xl text-ink-muted leading-relaxed">
              Across upstream support, EPC delivery, HSE programs, and asset
              integrity, our teams bring disciplined project control and a
              culture that treats safety and schedule as equal obligations —
              not trade-offs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border-l-2 border-copper bg-white px-6 py-6">
              <h3 className="font-display text-lg font-bold text-navy">Mission</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">
                Deliver engineering solutions that protect people, strengthen
                assets, and create lasting operational value for our clients.
              </p>
            </div>
            <div className="border-l-2 border-steel bg-white px-6 py-6">
              <h3 className="font-display text-lg font-bold text-navy">Vision</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">
                Be the engineering partner operators trust when certainty,
                competence, and integrity matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Values"
            title="What guides every engagement"
            description="Three principles shape how we hire, plan, and deliver."
          />
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.li
                key={value.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <p className="font-display text-sm font-bold tracking-[0.16em] text-copper uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Domains"
            title="Engineering depth across the project lifecycle"
            description="Specialists who speak the language of process, mechanical, electrical, and controls — and know how those disciplines meet in the field."
            light
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <li
                key={domain}
                className="border border-white/15 bg-white/5 px-5 py-4 text-white/90"
              >
                {domain}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
