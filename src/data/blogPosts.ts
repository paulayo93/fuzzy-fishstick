export type BlogPost = {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  coverImage: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'asset-integrity-offshore',
    title: 'Rethinking Asset Integrity for Aging Offshore Platforms',
    excerpt:
      'How structured inspection programs and risk-based maintenance are extending the productive life of mature offshore assets across West Africa.',
    date: '2026-07-14',
    category: 'Asset Integrity',
    coverImage:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
  },
  {
    id: 'hse-culture-field',
    title: 'Building an HSE Culture That Survives the Field',
    excerpt:
      'Policies alone do not protect people. We look at the habits, leadership signals, and reporting systems that make safety stick on remote sites.',
    date: '2026-06-28',
    category: 'HSE',
    coverImage:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
  },
  {
    id: 'epc-schedule-certainty',
    title: 'Schedule Certainty in Complex EPC Projects',
    excerpt:
      'From early FEED alignment to procurement sequencing — practical levers that reduce slippage without compromising engineering quality.',
    date: '2026-06-02',
    category: 'EPC',
    coverImage:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
  },
  {
    id: 'upstream-production-optimization',
    title: 'Production Optimization Under Real Operating Constraints',
    excerpt:
      'A field-first view of how wellsite engineering and data-informed interventions improve recovery without overcomplicating operations.',
    date: '2026-05-18',
    category: 'Upstream',
    coverImage:
      'https://images.unsplash.com/photo-1473341302520-8b7443bcbba0?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
  },
  {
    id: 'energy-transition-engineering',
    title: 'Engineering Discipline in an Energy Transition Era',
    excerpt:
      'Oil and gas operators still need reliable engineering partners. Here is how transition pressures are reshaping project priorities — not lowering standards.',
    date: '2026-04-30',
    category: 'Industry',
    coverImage:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    readTime: '8 min read',
  },
  {
    id: 'procurement-risk-mitigation',
    title: 'Mitigating Procurement Risk on Long-Lead Equipment',
    excerpt:
      'Vendor qualification, dual-sourcing strategies, and inspection hold points that keep critical path equipment from becoming the project bottleneck.',
    date: '2026-04-09',
    category: 'EPC',
    coverImage:
      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
  },
]
