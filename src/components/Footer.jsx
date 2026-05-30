import { motion } from 'framer-motion'
import {
  RiCodeSSlashLine,
  RiTelegramLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
} from 'react-icons/ri'

const socials = [
  { icon: RiWhatsappLine, href: 'https://wa.me/996509190706', label: 'WhatsApp' },
  { icon: RiTelegramLine, href: '#', label: 'Telegram' },
  { icon: RiInstagramLine, href: '#', label: 'Instagram' },
  { icon: RiGithubLine, href: '#', label: 'GitHub' },
  { icon: RiLinkedinBoxLine, href: '#', label: 'LinkedIn' },
]

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Order', href: '#order' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg glow-border-blue flex items-center justify-center bg-electric-glow">
                <RiCodeSSlashLine className="text-electric text-lg" />
              </div>
              <span className="font-display font-700 text-white text-sm tracking-wide">
                <span className="gradient-text">Dev</span>Studio
              </span>
            </div>
            <p className="text-white/35 text-sm font-body text-center md:text-left leading-relaxed">
              Modern frontend development services. Turning ideas into exceptional digital experiences.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="section-label text-[10px] mb-1">Navigation</p>
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/40 hover:text-white/80 text-sm font-body transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="section-label text-[10px] mb-1">Connect</p>
            <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:glow-border-blue transition-all duration-200"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-mono">
            © {new Date().getFullYear()} DevStudio · Frontend Developer
          </p>
          <p className="text-white/20 text-xs font-mono">
            Built with React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
