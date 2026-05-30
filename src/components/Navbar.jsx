import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenuLine, RiCloseLine, RiCodeSSlashLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Order', href: '#order' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3 shadow-glass' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-9 h-9 rounded-lg glow-border-blue flex items-center justify-center bg-electric-glow">
              <RiCodeSSlashLine className="text-electric text-lg" />
            </div>
            <span className="font-display font-700 text-white text-sm tracking-wide hidden sm:block">
              <span className="gradient-text">Dev</span>Studio
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-electric group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNav('#order')}
              className="px-5 py-2 rounded-xl text-sm font-display font-600 bg-electric text-white shadow-glow-blue hover:bg-electric-dim transition-colors duration-200"
            >
              Order Now
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center glass rounded-lg text-white/70 hover:text-white transition-colors"
          >
            {open ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-40 mx-4 glass-strong rounded-2xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left font-body text-base text-white/70 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#order')}
                className="mt-2 w-full py-3 rounded-xl text-sm font-display font-600 bg-electric text-white shadow-glow-blue"
              >
                Order Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
