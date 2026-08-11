import type { ReactNode } from 'react'

type HoverRevealImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  overlayClassName?: string
  children?: ReactNode
}

export function HoverRevealImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  overlayClassName = '',
  children,
}: HoverRevealImageProps) {
  return (
    <div
      tabIndex={0}
      className={[
        'group relative overflow-hidden outline-none',
        className,
      ].join(' ')}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={[
          'h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110 group-focus-within:scale-110',
          imgClassName,
        ].join(' ')}
      />
      <div
        aria-hidden
        className={[
          'pointer-events-none absolute inset-0 bg-navy/75 transition-opacity duration-700 ease-out group-hover:opacity-0 group-focus-within:opacity-0',
          overlayClassName,
        ].join(' ')}
      />
      {children}
    </div>
  )
}
