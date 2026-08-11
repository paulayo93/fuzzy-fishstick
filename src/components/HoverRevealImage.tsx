type HoverRevealImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

export function HoverRevealImage({
  src,
  alt,
  className = '',
  imgClassName = '',
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
        className={[
          'h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105',
          imgClassName,
        ].join(' ')}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-navy/70 transition-opacity duration-500 ease-out group-hover:opacity-0 group-focus-within:opacity-0"
      />
    </div>
  )
}
