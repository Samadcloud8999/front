import { motion } from 'framer-motion'
import {
  RiLayoutLine,
  RiBuildingLine,
  RiUserLine,
  RiShoppingCartLine,
  RiCodeSSlashLine,
} from 'react-icons/ri'
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: RiLayoutLine,
    title: 'Landing Pages',
    desc: 'High-converting single-page sites designed to capture attention and turn visitors into customers.',
    accent: '#4f8bff',
    glow: 'rgba(79,139,255,0.12)',
    tags: ['Conversion-focused', 'Fast delivery', 'A/B ready'],
  },
  {
    icon: RiBuildingLine,
    title: 'Business Websites',
    desc: 'Professional multi-page websites that build brand credibility and drive business growth.',
    accent: '#00e5a0',
    glow: 'rgba(0,229,160,0.12)',
    tags: ['Multi-page', 'CMS ready', 'SEO optimized'],
  },
  {
    icon: RiUserLine,
    title: 'Portfolio Websites',
    desc: 'Stunning personal portfolios that showcase your work and leave a memorable impression.',
    accent: '#9b7cff',
    glow: 'rgba(155,124,255,0.12)',
    tags: ['Personal brand', 'Gallery ready', 'Custom design'],
  },
  {
    icon: RiShoppingCartLine,
    title: 'Online Stores',
    desc: 'Feature-rich e-commerce solutions with smooth checkout flows and product management.',
    accent: '#ff6b6b',
    glow: 'rgba(255,107,107,0.12)',
    tags: ['E-commerce', 'Payment ready', 'Inventory'],
  },
  {
    icon: RiCodeSSlashLine,
    title: 'Web Applications',
    desc: 'Custom interactive web apps with real-time features, dashboards, and complex logic.',
    accent: '#ffd93d',
    glow: 'rgba(255,217,61,0.12)',
    tags: ['React / Next.js', 'API integration', 'Scalable'],
  },
]

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView()
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative glass rounded-2xl p-6 cursor-default overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${service.glow}, transparent 70%)` }}
      />
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: service.glow, border: `1px solid ${service.accent}30` }}
      >
        <Icon size={22} style={{ color: service.accent }} />
      </div>
      <h3 className="relative font-display font-600 text-lg text-white mb-2">{service.title}</h3>
      <p className="relative text-white/45 text-sm font-body leading-relaxed mb-5">{service.desc}</p>
      <div className="relative flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2.5 py-1 rounded-full"
            style={{ background: `${service.accent}10`, color: service.accent, border: `1px solid ${service.accent}25` }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
      />
    </motion.div>
  )
}

export default function Services() {
  const [titleRef, titleInView] = useInView()

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-electric/8 top-1/2 right-[-100px]" />
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">What I Build</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Services & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto font-body">
            From simple landing pages to complex web applications — every project is crafted with care and attention to detail.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
