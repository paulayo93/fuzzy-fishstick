export const company = {
  name: 'Ovwspelo Limited',
  shortName: 'Ovwspelo',
  tagline: 'Engineering Solutions. Delivering Excellence.',
  email: 'info@ovwspelo.com',
  rcNumber: '1579853',
  incorporated: '26 April 2019',
  phones: ['08149555321', '08067109763'] as const,
  addresses: [
    {
      label: 'Headquarters',
      line1: 'Block 3, Edewor Shopping Center',
      line2: 'Effurun, Delta State',
    },
    {
      label: 'Lagos',
      line1: '26 Dele Adedeji Street, Eti-Osa',
      line2: 'Lekki, Lagos State',
    },
  ] as const,
  hours: 'Mon – Fri, 8:00 AM – 5:00 PM WAT',
} as const

/** Build a tel: href from a local Nigerian number (leading 0 → +234). */
export function phoneTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.startsWith('0')) {
    return `tel:+234${digits.slice(1)}`
  }
  return `tel:+${digits}`
}

export type NavChild = { label: string; to: string }

export type NavLink =
  | { label: string; to: string; children?: undefined }
  | { label: string; to: string; children: readonly NavChild[] }

export const navLinks: readonly NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  {
    label: 'Sustainability',
    to: '/sustainability',
    children: [
      { label: 'ESG', to: '/sustainability' },
      { label: 'HSE', to: '/hse' },
    ],
  },
  {
    label: 'Stakeholders',
    to: '/investors',
    children: [
      { label: 'Investors', to: '/investors' },
      { label: 'Partners', to: '/partners' },
    ],
  },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
] as const

export const services = [
  {
    title: 'Mud Engineering',
    description:
      'Expert mud engineering solutions that optimize drilling performance, enhance wellbore stability, and support safe, efficient operations.',
    icon: 'Drill' as const,
  },
  {
    title: 'Completion Fluids',
    description:
      'Specialized completion fluid solutions designed to protect formations, reduce damage, and improve well productivity.',
    icon: 'Droplets' as const,
  },
  {
    title: 'Filtration & Solids Control',
    description:
      'Advanced filtration and solids control solutions that maintain fluid integrity, reduce losses, and improve drilling efficiency.',
    icon: 'Filter' as const,
  },
  {
    title: 'Supply & Logistics',
    description:
      'Reliable logistics and supply solutions for crude oil, AGO, PMS, chemicals, equipment, and industrial materials, ensuring safe and timely delivery.',
    icon: 'Truck' as const,
  },
  {
    title: 'Civil Engineering & Construction',
    description:
      'Quality civil engineering and construction solutions covering infrastructure, buildings, roads, drainage, structural works, and facility maintenance.',
    icon: 'HardHat' as const,
  },
  {
    title: 'Project Management',
    description:
      'Professional project management solutions delivering effective planning, execution, coordination, and monitoring for successful project delivery.',
    icon: 'ClipboardList' as const,
  },
] as const

export const values = [
  {
    title: 'Safety',
    description:
      'Every decision begins with people. We design, plan, and execute so that every worker goes home safe.',
  },
  {
    title: 'Integrity',
    description:
      'Transparent communication, accountable delivery, and ethical practice across every engagement.',
  },
  {
    title: 'Excellence',
    description:
      'Technical rigor and operational discipline — because good enough is never the standard.',
  },
] as const
