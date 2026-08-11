export const servicesPage = {
  hero: {
    eyebrow: 'Services',
    title: 'Integrated offshore and energy support',
    image: '/images/services-hero.png',
  },
  intro:
    'We offer bespoke solutions to keep your facilities operating at optimal performance — combining specialist teams, proven technology, and reliable logistics.',
  featured: [
    {
      title: 'Vessel Chartering',
      description:
        'Ovwspelo provides reliable and flexible vessel chartering solutions to support offshore operations across the marine and energy sectors.',
      details: [
        'Our fleet partners are maintained to international standards and crewed by experienced professionals to ensure safe, efficient, and uninterrupted operations.',
        'We work closely with clients to deploy the right vessel for each project, optimizing performance, cost efficiency, and operational reliability in line with project requirements.',
      ],
      image: '/images/vessel-chartering.jpg',
      imageAlt: 'Offshore support vessel underway',
    },
    {
      title: 'Offshore Waste',
      description:
        'We deliver compliant offshore waste management and recovery services in accordance with MARPOL regulations and Nigerian maritime standards.',
      details: [
        'Our operations focus on the safe handling, collection, transportation, and disposal of offshore-generated waste, minimizing environmental impact while supporting sustainable offshore activities.',
        'Through structured processes and regulatory alignment, we help clients meet environmental obligations without compromising operational efficiency.',
      ],
      image: '/images/offshore-waste-services.jpg',
      imageAlt: 'Offshore waste handling operations',
    },
  ],
  other: [
    {
      title: 'Survey & Geotechnical Services',
      description:
        'Whether operating in deep offshore or shallow waters, we understand the risks involved in complex marine projects. Our expertise and partnerships deliver tailored solutions for every operational need.',
      image: '/images/survey-geotechnical.jpg',
      imageAlt: 'Survey and geotechnical operations at sea',
    },
    {
      title: 'Inspection, Maintenance & Repair',
      description:
        'Offshore oil and gas projects demand reliable marine support. Ovwspelo delivers comprehensive IMR services backed by capable vessels and specialized equipment, including ROV support.',
      image: '/images/imr.jpg',
      imageAlt: 'Inspection, maintenance and repair operations',
    },
    {
      title: 'Subsea Construction & Installation',
      description:
        'We provide consultancy and support for front-end engineering, feasibility studies, concept development, design, installation, and removal of offshore and marine structures.',
      image: '/images/services-vessel-chartering-2.png',
      imageAlt: 'Subsea construction support vessel',
    },
  ],
} as const
