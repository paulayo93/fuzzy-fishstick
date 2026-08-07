import type { BlogPost } from '../data/blogPosts'

type BlogCardProps = {
  post: BlogPost
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.coverImage}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-navy/90 px-2.5 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3 text-sm text-ink-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-navy group-hover:text-steel">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-ink-muted leading-relaxed">{post.excerpt}</p>
      </div>
    </article>
  )
}
