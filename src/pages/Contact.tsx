import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { company } from '../data/company'
import { ContactForm } from '../components/ContactForm'

const HERO_IMAGE = '/images/request-info.jpg'

export function Contact() {
  return (
    <>
      <section className="relative min-h-[52vh] overflow-hidden pt-[4.5rem]">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-navy/60" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-6xl items-end px-5 pb-16 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-sm font-bold tracking-[0.2em] text-copper-soft uppercase">
              {company.shortName}
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let’s discuss your next project
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Share a brief on scope, location, and timeline. We will follow up
              with the right engineering lead.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
          >
            <ContactForm />
          </motion.div>

          <motion.aside
            className="space-y-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="bg-navy p-7 text-white sm:p-8">
              <h2 className="font-display text-xl font-bold">Direct lines</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 shrink-0 text-copper-soft" size={18} aria-hidden />
                  <div>
                    <p className="text-sm text-white/55">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="font-medium transition-colors hover:text-copper-soft"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 shrink-0 text-copper-soft" size={18} aria-hidden />
                  <div>
                    <p className="text-sm text-white/55">Phone</p>
                    <a
                      href={`tel:${company.phone.replace(/\s/g, '')}`}
                      className="font-medium transition-colors hover:text-copper-soft"
                    >
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-copper-soft" size={18} aria-hidden />
                  <div>
                    <p className="text-sm text-white/55">Headquarters</p>
                    <p className="font-medium">
                      {company.address.line1}
                      <br />
                      {company.address.line2}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 shrink-0 text-copper-soft" size={18} aria-hidden />
                  <div>
                    <p className="text-sm text-white/55">Hours</p>
                    <p className="font-medium">{company.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-navy">
                What to include
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted leading-relaxed">
                <li>Project type and location</li>
                <li>Current phase (FEED, detailed design, construction…)</li>
                <li>Target timeline and key constraints</li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  )
}
