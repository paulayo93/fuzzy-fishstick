import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { company, navLinks } from '../data/company'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-navy/95 backdrop-blur-md'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-copper font-display text-sm font-bold text-white">
            OL
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {company.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [
                  'text-sm font-medium tracking-wide transition-colors',
                  isActive ? 'text-copper-soft' : 'text-white/80 hover:text-white',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-sm bg-copper px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-copper-hover"
          >
            Talk to us
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-navy md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-sm px-3 py-3 text-base font-medium',
                      isActive
                        ? 'bg-white/5 text-copper-soft'
                        : 'text-white/85 hover:bg-white/5',
                    ].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-sm bg-copper px-3 py-3 text-center text-base font-semibold text-white"
              >
                Talk to us
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
