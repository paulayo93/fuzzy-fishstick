import { motion } from 'framer-motion'
import { hsePage } from '../data/sustainability'
import { SectionHeading } from '../components/SectionHeading'

export function Hse() {
  const { hero, safetyPolicy, policyStandards, hseManual, pillars } = hsePage

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

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Policy"
            title={safetyPolicy.title}
            description={safetyPolicy.body}
          />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Standards"
            title={policyStandards.title}
            description={policyStandards.intro}
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            {policyStandards.items.map((item, index) => (
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

      <section className="relative overflow-hidden">
        <div className="grid min-h-[28rem] lg:grid-cols-2">
          <div className="relative min-h-[18rem]">
            <img
              src={hseManual.image}
              alt="HSE management system documentation"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center bg-steel px-5 py-16 sm:px-10 lg:px-14">
            <SectionHeading
              eyebrow="Systems"
              title={hseManual.title}
              description={hseManual.body}
              light
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Pillars"
            title="How we protect people, assets, and communities"
            description="Five focus areas that shape daily decisions across our operations."
          />
          <ul className="mt-14 space-y-16">
            {pillars.map((pillar, index) => {
              const imageLeft = index % 2 === 0
              return (
                <motion.li
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45 }}
                  className="grid gap-8 lg:grid-cols-2 lg:items-center"
                >
                  <div
                    className={[
                      'relative aspect-[16/10] overflow-hidden',
                      imageLeft ? 'lg:order-1' : 'lg:order-2',
                    ].join(' ')}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={imageLeft ? 'lg:order-2' : 'lg:order-1'}>
                    <p className="font-display text-sm font-bold tracking-[0.16em] text-copper uppercase">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-ink-muted leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
