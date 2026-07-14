// Single source of truth, sourced directly from Hritik's resume.

export const profile = {
  name: 'Hritik Gujar',
  firstName: 'Hritik',
  role: 'UI/UX Product Designer',
  tagline: 'Designing intuitive, accessible, data-rich product experiences.',
  location: 'West Haven, CT',
  email: 'hritikgujar10@gmail.com',
  phone: '+1 (203) 503-4134',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  summary:
    'UI/UX Product Designer with over 3 years of experience creating user-friendly mobile applications and data-rich web platforms. I own complete design processes in Figma, from research to scalable design systems, with a firm commitment to accessibility (WCAG). Backed by an MS in Digital Marketing, I blend UX strategy and Conversion Rate Optimization to turn user-behavior insights into measurable product growth.',
}

export const stats = [
  { value: '3+', label: 'Years designing products' },
  { value: '30+', label: 'Reusable UI components built' },
  { value: 'WCAG', label: 'Accessibility-first mindset' },
  { value: '3', label: 'Industries: health, FMCG, AI' },
]

export const skills = [
  {
    title: 'Design Tools',
    icon: 'pen',
    items: ['Figma Auto Layout', 'Component Libraries', 'Advanced Prototyping', 'Adobe XD', 'Photoshop', 'Illustrator'],
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

export const projects = [
  {
    name: 'Patient-Facing Healthcare App',
    org: 'Swasthya Lifescience',
    year: '2023–24',
    blurb:
      'A mobile app and web portal that makes appointment booking and medical-record access effortless, built accessibility-first for elderly and diverse users.',
    tags: ['Mobile App', 'WCAG', 'Design System'],
    accent: '#C6F24E',
  },
  {
    name: 'Clinical Data Dashboards',
    org: 'Swasthya Lifescience',
    year: '2023–24',
    blurb:
      'Data-dense internal dashboards for researchers and HCPs, taming complex medical data through clear information architecture and visualization.',
    tags: ['Data Viz', 'IA', 'Enterprise'],
    accent: '#7DD3FC',
  },
  {
    name: 'B2B Ordering Platform Revamp',
    org: 'Accenture · Fortune 500 FMCG',
    year: '2021–22',
    blurb:
      'Reimagined search and checkout for a global FMCG ordering platform, backed by a 30+ component Figma library that kept design and code perfectly in sync.',
    tags: ['B2B', 'Component Library', 'CRO'],
    accent: '#F0ABFC',
  },
  {
    name: 'Bigelow Benefits Optimization',
    org: 'Sacred Heart University · Capstone',
    year: '2025',
    blurb:
      'Competitive analysis and customer-journey mapping to reduce e-commerce friction, with data-driven content strategies and KPI forecasts to lift visibility and conversion.',
    tags: ['UX Research', 'Journey Maps', 'Analytics'],
    accent: '#FDBA74',
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
  'Foundations of Responsible AI · LinkedIn Learning',
  'Business Analysis: Essential Tools · LinkedIn Learning',
  'Web Analytics & Marketing Metrics · MBTN Academy',
  'Figma Essential Training',
  'Figma for UX Design',
  'UX Foundations: UX Research and Design',
]
