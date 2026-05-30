import { motion } from 'framer-motion'
import { RiArrowRightLine, RiCheckLine } from 'react-icons/ri'

const floatIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

const badges = ['React & Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript']

export default function Hero() {
  const handleOrder = () => {
    document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] bg-electric/10 top-[-100px] right-[-150px] animate-pulse-slow" />
      <div className="orb w-[400px] h-[400px] bg-jade/8 bottom-[-80px] left-[-120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="orb w-[250px] h-[250px] bg-violet-soft/10 top-[30%] left-[5%]" style={{ animationDelay: '1s' }} />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(79,139,255,0.08),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-5 text-center">
        {/* Pre-badge */}
        <motion.div {...floatIn(0.1)} className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-jade animate-pulse" />
            <span className="section-label text-[10px]">Available for projects</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div {...floatIn(0.2)} className="mb-5">
          <h1 className="font-display font-800 leading-[1.05] tracking-tight">
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white/90 mb-2">
              Frontend
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text">
              Developer
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...floatIn(0.35)}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/50 font-body font-300 leading-relaxed mb-10"
        >
          Modern websites, landing pages, business websites and
          <span className="text-white/75"> web applications </span>
          crafted with precision and performance.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...floatIn(0.45)} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(79,139,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOrder}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-electric text-white font-display font-600 text-base shadow-glow-blue transition-all duration-300"
          >
            Order a Website
            <RiArrowRightLine className="text-lg group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl glass glow-border-blue text-white/80 hover:text-white font-display font-500 text-base transition-all duration-300"
          >
            View Services
          </motion.button>
        </motion.div>

        {/* Tech badges */}
        <motion.div {...floatIn(0.55)} className="flex flex-wrap gap-3 justify-center mb-16">
          {badges.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 glass px-3.5 py-1.5 rounded-full text-xs font-mono text-white/50"
            >
              <RiCheckLine className="text-jade text-xs" />
              {b}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          {...floatIn(0.65)}
          className="inline-grid grid-cols-3 gap-px glass-strong rounded-2xl overflow-hidden"
        >
          {[
            { num: '50+', label: 'Projects Done' },
            { num: '3+', label: 'Years Exp.' },
            { num: '100%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="px-8 py-5 text-center">
              <div className="font-display font-700 text-2xl sm:text-3xl gradient-text">{stat.num}</div>
              <div className="text-white/40 text-xs font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none" />
    </section>
  )
}
