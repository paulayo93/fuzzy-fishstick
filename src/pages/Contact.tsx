import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { company } from '../data/company'
import { ContactForm } from '../components/ContactForm'
import { SectionHeading } from '../components/SectionHeading'

export function Contact() {
  return (
    <>
      <section className="bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Contact us"
              title="Let’s discuss your next project"
              description="Share a brief on scope, location, and timeline. We will follow up with the right engineering lead."
              light
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="bg-navy p-7 text-white">
              <h2 className="font-display text-xl font-bold">Direct lines</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 shrink-0 text-copper-soft" size={18} aria-hidden />
                  <div>
                    <p className="text-sm text-white/55">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="font-medium hover:text-copper-soft"
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
                      className="font-medium hover:text-copper-soft"
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

            <div className="border border-line bg-white p-7">
              <h3 className="font-display text-lg font-bold text-navy">
                What to include
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
                <li>Project type and location</li>
                <li>Current phase (FEED, detailed design, construction…)</li>
                <li>Target timeline and key constraints</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
