import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { company, navLinks, type NavLink as NavLinkItem } from '../data/company'

function linkIsActive(link: NavLinkItem, pathname: string) {
  if (link.children) {
    return link.children.some(
      (child) =>
        pathname === child.to || pathname.startsWith(`${child.to}/`),
    )
  }
  if (link.to === '/') return pathname === '/'
  return pathname === link.to || pathname.startsWith(`${link.to}/`)
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const { pathname } = useLocation()

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

  useEffect(() => {
    setOpen(false)
    setDesktopOpen(null)
    setMobileExpanded(null)
  }, [pathname])

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

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            if (link.children) {
              const active = linkIsActive(link, pathname)
              const isOpen = desktopOpen === link.label
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDesktopOpen(link.label)}
                  onMouseLeave={() => setDesktopOpen(null)}
                >
                  <button
                    type="button"
                    className={[
                      'inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors',
                      active || isOpen
                        ? 'text-copper-soft'
                        : 'text-white/80 hover:text-white',
                    ].join(' ')}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() =>
                      setDesktopOpen(isOpen ? null : link.label)
                    }
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={[
                        'transition-transform',
                        isOpen ? 'rotate-180' : '',
                      ].join(' ')}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="min-w-[11rem] border border-white/10 bg-navy py-2 shadow-lg">
                          {link.children.map((child) => (
                            <NavLink
                              key={child.to + child.label}
                              to={child.to}
                              className={({ isActive }) =>
                                [
                                  'block px-4 py-2.5 text-sm transition-colors',
                                  isActive
                                    ? 'bg-white/5 text-copper-soft'
                                    : 'text-white/80 hover:bg-white/5 hover:text-white',
                                ].join(' ')
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'text-sm font-medium tracking-wide transition-colors',
                    isActive
                      ? 'text-copper-soft'
                      : 'text-white/80 hover:text-white',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            )
          })}
          <Link
            to="/contact"
            className="rounded-sm bg-copper px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-copper-hover"
          >
            Talk to us
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-white lg:hidden"
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
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => {
                if (link.children) {
                  const expanded = mobileExpanded === link.label
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        className={[
                          'flex w-full items-center justify-between rounded-sm px-3 py-3 text-left text-base font-medium',
                          linkIsActive(link, pathname)
                            ? 'bg-white/5 text-copper-soft'
                            : 'text-white/85 hover:bg-white/5',
                        ].join(' ')}
                        aria-expanded={expanded}
                        onClick={() =>
                          setMobileExpanded(expanded ? null : link.label)
                        }
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={[
                            'transition-transform',
                            expanded ? 'rotate-180' : '',
                          ].join(' ')}
                          aria-hidden
                        />
                      </button>
                      {expanded ? (
                        <div className="mb-1 ml-3 flex flex-col border-l border-white/15 pl-2">
                          {link.children.map((child) => (
                            <NavLink
                              key={child.to + child.label}
                              to={child.to}
                              onClick={() => setOpen(false)}
                              className={({ isActive }) =>
                                [
                                  'rounded-sm px-3 py-2.5 text-sm font-medium',
                                  isActive
                                    ? 'bg-white/5 text-copper-soft'
                                    : 'text-white/75 hover:bg-white/5',
                                ].join(' ')
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  )
                }

                return (
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
                )
              })}
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
