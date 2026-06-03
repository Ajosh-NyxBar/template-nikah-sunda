import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id={id} className={`py-20 px-4 sm:px-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  )
}
