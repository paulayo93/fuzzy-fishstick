type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : '',
      ].join(' ')}
    >
      {eyebrow ? (
        <p
          className={[
            'mb-3 text-sm font-semibold tracking-[0.18em] uppercase',
            light ? 'text-copper-soft' : 'text-copper',
          ].join(' ')}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[
          'font-display text-3xl font-bold tracking-tight sm:text-4xl',
          light ? 'text-white' : 'text-navy',
        ].join(' ')}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            'mt-4 text-lg leading-relaxed',
            light ? 'text-white/75' : 'text-ink-muted',
          ].join(' ')}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
