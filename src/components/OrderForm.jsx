import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiWhatsappLine,
  RiArrowRightLine,
  RiCheckDoubleLine,
  RiUser3Line,
  RiPhoneLine,
  RiMailLine,
  RiGlobalLine,
  RiMoneyDollarCircleLine,
  RiFileTextLine,
  RiCalendarLine,
  RiStickyNoteLine,
} from 'react-icons/ri'
import { useInView } from '../hooks/useInView'

const initialForm = {
  name: '',
  whatsapp: '',
  email: '',
  websiteType: '',
  budget: '',
  description: '',
  deadline: '',
  extras: '',
}

function FieldWrapper({ icon: Icon, label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-xs font-mono text-white/50 tracking-wide">
        <Icon size={13} className="text-electric" />
        {label}
        {required && <span className="text-electric/70">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function OrderForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [titleRef, titleInView] = useInView()
  const [formRef, formInView] = useInView()

  const set = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }))
    if (errors[k]) setErrors((p) => ({ ...p, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.whatsapp.trim()) e.whatsapp = 'WhatsApp number is required'
    if (!form.websiteType) e.websiteType = 'Please select a website type'
    if (!form.budget) e.budget = 'Please select a budget range'
    if (!form.description.trim()) e.description = 'Please describe your project'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      const firstErr = document.querySelector('[data-error="true"]')
      firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    const lines = [
      'Hello! 👋',
      '',
      '*New Website Request* 🚀',
      '─────────────────────',
      `*Name:* ${form.name}`,
      `*WhatsApp:* ${form.whatsapp}`,
      form.email ? `*Email:* ${form.email}` : '',
      `*Website Type:* ${form.websiteType}`,
      `*Budget:* ${form.budget}`,
      form.deadline ? `*Deadline:* ${form.deadline}` : '',
      '',
      '*Project Description:*',
      form.description,
      form.extras ? '' : '',
      form.extras ? `*Additional Requirements:*` : '',
      form.extras ? form.extras : '',
    ]
      .filter((l) => l !== null && l !== undefined)
      .join('\n')

    const encoded = encodeURIComponent(lines)
    window.open(`https://wa.me/996509190706?text=${encoded}`, '_blank')
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="order" className="relative py-28 overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(0,229,160,0.04),transparent)]" />
      <div className="orb w-[450px] h-[450px] bg-jade/6 bottom-0 right-[-200px]" />
      <div className="orb w-[300px] h-[300px] bg-electric/8 top-0 left-[-100px]" />

      <div className="max-w-3xl mx-auto px-5">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">Get Started</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Order a <span className="gradient-text">Website</span>
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto font-body">
            Fill out the form below and I'll contact you on WhatsApp to discuss your project in detail.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 40 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-strong rounded-3xl p-7 md:p-10"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-5"
              >
                <div className="w-20 h-20 rounded-full bg-jade/15 glow-border-jade flex items-center justify-center">
                  <RiCheckDoubleLine size={36} className="text-jade" />
                </div>
                <div>
                  <h3 className="font-display font-700 text-2xl text-white mb-2">Request Sent!</h3>
                  <p className="text-white/50 font-body text-sm max-w-sm">
                    Your WhatsApp should have opened with your message. I'll reply as soon as possible!
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleReset}
                  className="mt-2 px-6 py-3 rounded-xl glass glow-border-blue text-white/70 hover:text-white font-display font-500 text-sm transition-all"
                >
                  Send Another Request
                </motion.button>
              </motion.div>
            ) : (
              <motion.div key="form" className="space-y-5">
                {/* Row 1: Name + WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FieldWrapper icon={RiUser3Line} label="Your Name" required>
                    <div data-error={!!errors.name}>
                      <input
                        className={`form-input ${errors.name ? 'border-red-500/50' : ''}`}
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                      />
                      {errors.name && <p className="text-red-400/80 text-xs mt-1 font-mono">{errors.name}</p>}
                    </div>
                  </FieldWrapper>

                  <FieldWrapper icon={RiPhoneLine} label="WhatsApp Number" required>
                    <div data-error={!!errors.whatsapp}>
                      <input
                        className={`form-input ${errors.whatsapp ? 'border-red-500/50' : ''}`}
                        placeholder="+1 234 567 8900"
                        value={form.whatsapp}
                        onChange={(e) => set('whatsapp', e.target.value)}
                      />
                      {errors.whatsapp && <p className="text-red-400/80 text-xs mt-1 font-mono">{errors.whatsapp}</p>}
                    </div>
                  </FieldWrapper>
                </div>

                {/* Email */}
                <FieldWrapper icon={RiMailLine} label="Email (optional)">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                  />
                </FieldWrapper>

                {/* Row 2: Website Type + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FieldWrapper icon={RiGlobalLine} label="Website Type" required>
                    <div data-error={!!errors.websiteType}>
                      <select
                        className={`form-input ${errors.websiteType ? 'border-red-500/50' : ''}`}
                        value={form.websiteType}
                        onChange={(e) => set('websiteType', e.target.value)}
                      >
                        <option value="">Select type...</option>
                        <option>Landing Page</option>
                        <option>Business Website</option>
                        <option>Portfolio</option>
                        <option>Online Store</option>
                        <option>Web Application</option>
                      </select>
                      {errors.websiteType && <p className="text-red-400/80 text-xs mt-1 font-mono">{errors.websiteType}</p>}
                    </div>
                  </FieldWrapper>

                  <FieldWrapper icon={RiMoneyDollarCircleLine} label="Budget Range" required>
                    <div data-error={!!errors.budget}>
                      <select
                        className={`form-input ${errors.budget ? 'border-red-500/50' : ''}`}
                        value={form.budget}
                        onChange={(e) => set('budget', e.target.value)}
                      >
                        <option value="">Select budget...</option>
                        <option>Under $100</option>
                        <option>$100–$300</option>
                        <option>$300–$500</option>
                        <option>$500+</option>
                      </select>
                      {errors.budget && <p className="text-red-400/80 text-xs mt-1 font-mono">{errors.budget}</p>}
                    </div>
                  </FieldWrapper>
                </div>

                {/* Description */}
                <FieldWrapper icon={RiFileTextLine} label="Project Description" required>
                  <div data-error={!!errors.description}>
                    <textarea
                      className={`form-input resize-none ${errors.description ? 'border-red-500/50' : ''}`}
                      rows={4}
                      placeholder="Tell me about your project — goals, inspiration, key features you need..."
                      value={form.description}
                      onChange={(e) => set('description', e.target.value)}
                    />
                    {errors.description && <p className="text-red-400/80 text-xs mt-1 font-mono">{errors.description}</p>}
                  </div>
                </FieldWrapper>

                {/* Row 3: Deadline + Extras */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FieldWrapper icon={RiCalendarLine} label="Estimated Deadline">
                    <input
                      className="form-input"
                      placeholder="e.g. 2 weeks, July 15..."
                      value={form.deadline}
                      onChange={(e) => set('deadline', e.target.value)}
                    />
                  </FieldWrapper>

                  <FieldWrapper icon={RiStickyNoteLine} label="Additional Requirements">
                    <input
                      className="form-input"
                      placeholder="Dark theme, animations, etc."
                      value={form.extras}
                      onChange={(e) => set('extras', e.target.value)}
                    />
                  </FieldWrapper>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5" />

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(37,211,102,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-display font-600 text-base text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #25d366 0%, #128c4a 100%)',
                    boxShadow: '0 0 30px rgba(37,211,102,0.2)',
                  }}
                >
                  <RiWhatsappLine size={22} />
                  Send via WhatsApp
                  <RiArrowRightLine size={18} />
                </motion.button>

                <p className="text-center text-white/25 text-xs font-mono">
                  This will open WhatsApp with your request pre-filled
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
