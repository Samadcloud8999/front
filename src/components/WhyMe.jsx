import { motion } from 'framer-motion'
import {
  RiPaletteLine,
  RiDeviceLine,
  RiTimeLine,
  RiCodeLine,
  RiCustomerServiceLine,
} from 'react-icons/ri'
import { useInView } from '../hooks/useInView'

const reasons = [
  {
    icon: RiPaletteLine,
    title: 'Modern Design',
    desc: 'Every pixel matters. Designs that feel premium and stay ahead of trends, not behind them.',
  },
  {
    icon: RiDeviceLine,
    title: 'Responsive Layout',
    desc: 'Pixel-perfect on every device — from 4K monitors to the smallest mobile screens.',
  },
  {
    icon: RiTimeLine,
    title: 'Fast Development',
    desc: 'Efficient workflows and modern tooling mean your project ships on time, every time.',
  },
  {
    icon: RiCodeLine,
    title: 'Clean Code',
    desc: 'Well-structured, documented, and maintainable code that scales with your business.',
  },
  {
    icon: RiCustomerServiceLine,
    title: 'Ongoing Support',
    desc: 'Post-launch support and updates to keep your website performing at its best.',
  },
]

export default function WhyMe() {
  const [titleRef, titleInView] = useInView()

  return (
    <section id="why-me" className="relative py-28 overflow-hidden">
      {/* Bg decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(79,139,255,0.05),transparent)]" />
      <div className="orb w-[400px] h-[400px] bg-jade/8 top-10 left-[-150px]" />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">The Difference</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Why Choose <span className="gradient-text">Me</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto font-body">
            Not just code — a complete digital experience built on quality, speed, and reliability.
          </p>
        </motion.div>

        {/* Feature list with large numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const [ref, inView] = useInView()
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex gap-4 glass rounded-2xl p-6 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Number watermark */}
                <div
                  className="absolute right-4 top-2 font-display font-700 text-7xl leading-none pointer-events-none select-none"
                  style={{ color: 'rgba(79,139,255,0.04)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative flex-shrink-0 w-11 h-11 rounded-xl glass-strong flex items-center justify-center mt-0.5 glow-border-blue group-hover:bg-electric/10 transition-colors">
                  <Icon size={20} className="text-electric" />
                </div>

                {/* Text */}
                <div className="relative">
                  <h3 className="font-display font-600 text-base text-white mb-1.5">{r.title}</h3>
                  <p className="text-white/45 text-sm font-body leading-relaxed">{r.desc}</p>
                </div>

                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-2xl p-6 overflow-hidden flex flex-col justify-between"
            style={{
              background: 'linear-gradient(135deg, rgba(79,139,255,0.15) 0%, rgba(0,229,160,0.08) 100%)',
              border: '1px solid rgba(79,139,255,0.2)',
            }}
          >
            <div>
              <div className="font-mono text-xs text-electric/70 mb-3 tracking-widest uppercase">Ready to start?</div>
              <h3 className="font-display font-700 text-xl text-white mb-3 leading-tight">
                Let's build something <span className="gradient-text">great together</span>
              </h3>
              <p className="text-white/40 text-sm font-body">
                Fill out the form below and I'll get back to you within a few hours.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 w-full py-3 rounded-xl bg-electric text-white font-display font-600 text-sm shadow-glow-blue"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
