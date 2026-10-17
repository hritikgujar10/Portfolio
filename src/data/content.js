// Single source of truth, sourced directly from Hritik's resume.

export const profile = {
  name: 'Hritik Gujar',
  firstName: 'Hritik',
  role: 'UI/UX Product Designer',
  tagline: 'Designing intuitive, accessible, data-rich product experiences.',
  location: 'West Haven, CT',
  email: 'hritikgujar10@gmail.com',
  phone: '+1 (475) 372-6308',
  linkedin: 'https://linkedin.com/in/hritikgujar',
  github: 'https://github.com/hritikgujar10',
  summary:
    'UI/UX Product Designer with over 3 years of experience creating user-friendly mobile applications and data-rich web platforms. I own complete design processes in Figma, from research to scalable design systems, with a firm commitment to accessibility (WCAG). Backed by an MS in Digital Marketing, I blend UX strategy and Conversion Rate Optimization to turn user-behavior insights into measurable product growth.',
}

export const stats = [
  { value: '3+', label: 'Years designing products' },
  { value: '30+', label: 'Reusable UI components built' },
  { value: 'WCAG', label: 'Accessibility-first mindset' },
  { value: '6', label: 'Live websites shipped' },
]

export const skills = [
  {
    title: 'Design Tools',
    icon: 'pen',
    items: ['Figma Auto Layout', 'Component Libraries', 'Advanced Prototyping', 'Adobe XD', 'Photoshop', 'Illustrator'],
  },
  {
    title: 'AI Tools',
    icon: 'spark',
    items: ['ChatGPT', 'Figma AI', 'Gemini', 'v0'],
  },
  {
    title: 'UX Research & Design',
    icon: 'compass',
    items: ['Wireframing (Lo→Hi Fidelity)', 'User Flows', 'Information Architecture', 'Responsive Web Design', 'Cross-Platform Consistency', 'Mobile App Design'],
  },
  {
    title: 'Design Systems & Strategy',
    icon: 'grid',
    items: ['UI/UX Design Systems', 'Reusable Components', 'Grid Systems', 'CX Design', 'Interaction Details', 'Conversion Rate Optimization'],
  },
  {
    title: 'Software & Collaboration',
    icon: 'people',
    items: ['Jira', 'Agile / Scrum', 'Cross-functional Collaboration', 'Design-to-Dev Handoff', 'Technical Documentation'],
  },
]

export const experience = [
  {
    role: 'UI/UX Product Designer',
    company: 'Swasthya Lifescience Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'Feb 2023 – Jul 2024',
    tag: 'Healthcare',
    points: [
      'Designed intuitive wireframes and interactive prototypes in Figma for a patient-facing healthcare mobile app and web portal, enabling seamless appointment booking and medical-record access.',
      'Structured data-dense internal dashboards for clinical researchers and HCPs, improving complex medical-data visualization and information architecture.',
      'Integrated WCAG accessibility standards into design patterns, optimizing color contrast and font scalability for elderly and diverse patient demographics.',
      'Translated product and business requirements into optimized user flows, responsive layouts, and reusable component libraries for strict cross-platform consistency.',
      'Partnered with engineering during handoffs, providing detailed interaction specs and documentation for pixel-perfect implementation.',
    ],
  },
  {
    role: 'Jr. UI/UX Designer',
    company: 'Accenture',
    location: 'Mumbai, India',
    period: 'May 2021 – Apr 2022',
    tag: 'B2B · Fortune 500',
    points: [
      'Collaborated with senior designers to revamp a B2B ordering platform for a Fortune 500 FMCG client, optimizing search and checkout flows to lift engagement.',
      'Built and managed a Figma component library of 30+ reusable UI elements, ensuring strict design-to-code consistency across the platform.',
      'Translated complex requirements into high-fidelity wireframes and interactive prototypes for weekly client alignment and feature reviews.',
      'Facilitated smooth developer hand-offs through thorough specs, redlines, and assets, minimizing production friction.',
    ],
  },
  {
    role: 'UI/UX Design Intern',
    company: 'Xarka AI Technologies Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'Jun 2020 – Apr 2021',
    tag: 'AI · Analytics',
    points: [
      'Designed intuitive interfaces for websites, mobile apps, and internal analytics dashboards across multiple client projects.',
      'Created low-to-high fidelity wireframes and interactive layouts in Figma, converting raw product requirements into structured, clean designs.',
      'Supported engineering teams during implementation, ensuring accurate asset delivery and visual integrity in the final product.',
    ],
  },
]

// Live websites, shown with a homepage thumbnail from /public/projects.
export const work = [
  {
    name: 'Aura Stays',
    category: 'Travel · Booking platform',
    year: '2026',
    blurb:
      'A boutique-stays booking experience: an immersive search-first hero, filterable featured villas, and a bento of concierge chat, live weather and an Apple Wallet stay pass that sells the service by showing it.',
    tags: ['Booking UX', 'Bento UI', 'Light / Dark'],
    url: 'https://aura-stays-green.vercel.app/',
    image: '/projects/aura-stays.webp',
  },
  {
    name: 'Craft Fuel',
    category: 'D2C E-commerce',
    year: '2026',
    blurb:
      'A storefront for a high-protein oats and peanut butter brand, with quick-add product cards, bundles, nutrition breakdowns and social proof designed to drive conversion.',
    tags: ['E-commerce', 'CRO', 'Branding'],
    url: 'https://craft-fuel.vercel.app/',
    image: '/projects/craft-fuel.webp',
  },
  {
    name: 'Nimbus',
    category: 'AI SaaS · Product landing',
    year: '2026',
    blurb:
      'Landing page for an AI meeting-notes app, built around a live-transcript phone mockup and interactive summary, action-item and transcript tabs.',
    tags: ['SaaS', 'AI Product', 'Interaction'],
    url: 'https://nimbus-notes-sigma.vercel.app/',
    image: '/projects/nimbus.webp',
  },
  {
    name: 'VIVA Physio Clinic',
    category: 'Healthcare · Clinic website',
    year: '2026',
    blurb:
      'A calm, trust-building site for a physiotherapy clinic: scannable conditions and treatments, practitioner credentials up front and a clear path to book.',
    tags: ['Healthcare', 'Local Business', 'Accessibility'],
    url: 'https://viva-physio-clinic.vercel.app/',
    image: '/projects/viva-physio.webp',
  },
  {
    name: 'Pulse Studio',
    category: 'Fitness · Class booking',
    year: '2026',
    blurb:
      'A boutique fitness studio with a bookable weekly schedule, class filters, coach profiles and membership pricing, in an Apple Fitness-inspired visual language.',
    tags: ['Scheduling', 'Pricing', 'Mobile-first'],
    url: 'https://pulse-studio-orpin.vercel.app/',
    image: '/projects/pulse-studio.webp',
  },
  {
    name: 'Artha',
    category: 'Fintech · Personal finance app',
    year: '2026',
    blurb:
      'A private personal-finance app that puts your money in a global context: one dashboard for net worth, budgets with a daily pace line, savings goals and a multi-asset portfolio, alongside live currency, crypto and gold rates.',
    tags: ['Fintech', 'Dashboard', 'Data Viz'],
    url: 'https://artha-finance-woad.vercel.app/',
    image: '/projects/artha-finance.webp',
  },
]

// Product design work from past roles.
export const projects = [
  {
    name: 'Patient-Facing Healthcare App',
    org: 'Swasthya Lifescience',
    year: '2023–24',
    blurb:
      'A mobile app and web portal that makes appointment booking and medical-record access effortless, built accessibility-first for elderly and diverse users.',
    tags: ['Mobile App', 'WCAG', 'Design System'],
  },
  {
    name: 'Clinical Data Dashboards',
    org: 'Swasthya Lifescience',
    year: '2023–24',
    blurb:
      'Data-dense internal dashboards for researchers and HCPs, taming complex medical data through clear information architecture and visualization.',
    tags: ['Data Viz', 'IA', 'Enterprise'],
  },
  {
    name: 'B2B Ordering Platform Revamp',
    org: 'Accenture · Fortune 500 FMCG',
    year: '2021–22',
    blurb:
      'Reimagined search and checkout for a global FMCG ordering platform, backed by a 30+ component Figma library that kept design and code perfectly in sync.',
    tags: ['B2B', 'Component Library', 'CRO'],
  },
  {
    name: 'Bigelow Benefits Optimization',
    org: 'Sacred Heart University · Capstone',
    year: '2025',
    blurb:
      'Competitive analysis and customer-journey mapping to reduce e-commerce friction, with data-driven content strategies and KPI forecasts to lift visibility and conversion.',
    tags: ['UX Research', 'Journey Maps', 'Analytics'],
  },
]

export const education = [
  {
    school: 'Sacred Heart University',
    location: 'Fairfield, CT',
    degree: 'M.S. in Digital Marketing',
    detail: 'GPA 3.6 / 4.0 · UX Strategy, CXM, AI for Business, Marketing Analytics',
    date: 'Jan 2026',
  },
  {
    school: 'K.V. Pendharkar College · University of Mumbai',
    location: 'Mumbai, India',
    degree: 'Bachelor of Commerce (B.Com)',
    detail: 'IT in Business, Principles of Marketing, Business Communication',
    date: 'May 2021',
  },
]

export const certifications = [
  'The AI-Driven Product Designer · LinkedIn Learning',
  'Enhancing Your Productivity as a Data Scientist with Generative AI · LinkedIn Learning',
  'Foundations of Responsible AI · LinkedIn Learning',
  'Business Analysis: Essential Tools · LinkedIn Learning',
  'Web Analytics & Marketing Metrics · MBTN Academy',
  'Figma Essential Training',
  'Figma for UX Design',
  'UX Foundations: UX Research and Design',
]
