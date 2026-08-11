import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { company, navLinks } from '../data/company'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            {company.name}
          </p>
          <p className="mt-3 max-w-sm text-white/70">{company.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-copper-soft uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
                {link.children ? (
                  <ul className="mt-1 space-y-1 pl-3">
                    {link.children.map((child) => (
                      <li key={child.to + child.label}>
                        <Link
                          to={child.to}
                          className="text-sm text-white/55 transition-colors hover:text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-copper-soft uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-white/75">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 shrink-0" size={16} aria-hidden />
              <a
                href={`mailto:${company.email}`}
                className="hover:text-white"
              >
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 shrink-0" size={16} aria-hidden />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0" size={16} aria-hidden />
              <span>
                {company.address.line1}
                <br />
                {company.address.line2}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Oil & gas engineering · West Africa & beyond</p>
        </div>
      </div>
    </footer>
  )
}
