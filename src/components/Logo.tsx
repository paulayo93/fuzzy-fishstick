import { company } from '../data/company'

/**
 * `nav` drops the tagline, which is illegible at header scale.
 * `full` is the complete lockup including the tagline.
 */
type LogoVariant = 'nav' | 'full'

type LogoProps = {
  variant?: LogoVariant
  /** Backs the navy wordmark with a white plate so it reads on dark surfaces. */
  onDark?: boolean
  alt?: string
  className?: string
}

const sources: Record<LogoVariant, string> = {
  nav: '/logo-compact.png',
  full: '/logo.png',
}

const sizes: Record<LogoVariant, string> = {
  nav: 'h-8 sm:h-9',
  full: 'h-16 sm:h-20',
}

const plates: Record<LogoVariant, string> = {
  nav: 'rounded-sm bg-white px-2.5 py-1.5',
  full: 'rounded-sm bg-white px-5 py-4',
}

export function Logo({
  variant = 'nav',
  onDark = false,
  alt = company.name,
  className,
}: LogoProps) {
  return (
    <span
      className={[
        'inline-flex items-center',
        onDark ? plates[variant] : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img
        src={sources[variant]}
        alt={alt}
        className={[sizes[variant], 'w-auto object-contain'].join(' ')}
      />
    </span>
  )
}
