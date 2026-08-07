import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const INTERVAL_MS = 6000
const FADE_SECONDS = 1

type HeroBackgroundCarouselProps = {
  images: string[]
}

export function HeroBackgroundCarousel({ images }: HeroBackgroundCarouselProps) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    if (reduceMotion || paused || count <= 1) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, paused, count, index])

  if (count === 0) return null

  const active = images[index]

  return (
    <>
      <div className="absolute inset-0 z-0" aria-hidden>
        {reduceMotion ? (
          <img
            src={active}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <AnimatePresence mode="sync" initial={false}>
            <motion.img
              key={active}
              src={active}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_SECONDS, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        )}
      </div>

      {count > 1 ? (
        <div
          className="pointer-events-none absolute inset-0 z-20"
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false)
            }
          }}
        >
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goPrev}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="pointer-events-auto absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-navy-deep/50 text-white transition-colors hover:bg-copper sm:left-6"
          >
            <ChevronLeft size={22} aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goNext}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="pointer-events-auto absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-navy-deep/50 text-white transition-colors hover:bg-copper sm:right-6"
          >
            <ChevronRight size={22} aria-hidden />
          </button>

          <div
            className="pointer-events-auto absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2.5"
            role="tablist"
            aria-label="Hero slides"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {images.map((src, i) => {
              const selected = i === index
              return (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={[
                    'h-2.5 w-2.5 border-2 border-white transition-colors',
                    selected ? 'bg-white' : 'bg-transparent hover:bg-white/40',
                  ].join(' ')}
                />
              )
            })}
          </div>
        </div>
      ) : null}
    </>
  )
}
