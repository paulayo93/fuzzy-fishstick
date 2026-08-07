import { motion } from 'framer-motion'
import { blogPosts } from '../data/blogPosts'
import { BlogCard } from '../components/BlogCard'
import { SectionHeading } from '../components/SectionHeading'

export function Blog() {
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
              eyebrow="Insights"
              title="Field notes from the energy sector"
              description="Perspectives on EPC delivery, HSE culture, asset integrity, and the engineering decisions that keep operations moving."
              light
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.li
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <BlogCard post={post} />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
