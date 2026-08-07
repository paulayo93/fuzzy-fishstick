export const company = {
  name: 'Ovwspelo Limited',
  shortName: 'Ovwspelo',
  tagline: 'Engineering Solutions. Delivering Excellence.',
  email: 'info@ovwspelo.com',
  phone: '+234 (0) 801 234 5678',
  address: {
    line1: '12 Admiralty Way',
    line2: 'Lekki Phase 1, Lagos, Nigeria',
  },
  hours: 'Mon – Fri, 8:00 AM – 5:30 PM WAT',
} as const

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
] as const

export const services = [
  {
    title: 'Mud Engineering',
    description:
      'Dependable mud engineering with demonstrated technical capabilities and a team of highly experienced engineers.',
    icon: 'Drill' as const,
  },
  {
    title: 'Completion Fluids',
    description:
      'Improve well productivity by reducing damage to the producing zone and helping prepare the wellbore.',
    icon: 'Droplets' as const,
  },
  {
    title: 'Filtration Services',
    description:
      'Protect the formation when solids-bearing fluids are injected; contamination shortens well life.',
    icon: 'Filter' as const,
  },
  {
    title: 'Solids Control',
    description:
      'Technologies that optimize drilling efficiency by maintaining fluid integrity and reducing fluid losses.',
    icon: 'Settings' as const,
  },
  {
    title: 'Supply and Logistics',
    description:
      'Reliable supply and logistics to ensure efficiency and optimization in drilling processes.',
    icon: 'Truck' as const,
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
