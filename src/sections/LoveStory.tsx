import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'

const stories = [
  {
    date: 'Juni 2022',
    title: 'Mimiti Tepang',
    description: 'Sim kuring mimiti tepang di hiji acara kabudayaan Sunda di Gedung Sate Bandung. Sapertos tos ditangtukeun ku Gusti.',
  },
  {
    date: 'Januari 2023',
    title: 'Ngawitan Hubungan',
    description: 'Saatos sering komunikasi sareng silaturahmi, sim kuring mutuskeun kanggo ngawitan hubungan anu langkung serius.',
  },
  {
    date: 'Maret 2025',
    title: 'Lamaran',
    description: 'Kalayan rasa syukur, prosesi lamaran dilaksanakeun sacara adat Sunda di bumi calon panganten istri.',
  },
  {
    date: 'Desember 2026',
    title: 'Pernikahan',
    description: 'Insya Allah, sim kuring bade ngalaksanakeun ijab qobul sareng walimatul ursy. Mugi ditepangkeun dina kasaean.',
  },
]

export default function LoveStory() {
  return (
    <SectionWrapper className="bg-sunda-green text-sunda-cream">
      <div className="text-center mb-16">
        <p className="text-sunda-gold text-xs tracking-[0.3em] uppercase font-sans mb-3">Our Journey</p>
        <h2 className="font-display text-4xl sm:text-5xl text-sunda-cream">Carita Cinta</h2>
        <OrnamentDivider />
      </div>

      <div className="relative">
        {/* Center line */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-sunda-gold/20 sm:-translate-x-1/2" />

        <div className="space-y-10">
          {stories.map((story, index) => (
            <TimelineItem key={index} story={story} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

function TimelineItem({ story, index }: { story: typeof stories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="relative pl-14 sm:pl-0">
      {/* Dot */}
      <div className="absolute left-6 sm:left-1/2 top-6 -translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="w-3 h-3 rounded-full bg-sunda-gold"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`sm:w-5/12 ${isEven ? 'sm:mr-auto sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}
      >
        <div className="rounded-xl p-6 bg-sunda-green-light/40 border border-sunda-gold/10">
          <span className="text-sunda-gold text-xs tracking-widest uppercase font-sans">{story.date}</span>
          <h3 className="font-display text-xl text-sunda-cream mt-2 mb-2">{story.title}</h3>
          <p className="text-sunda-cream/60 text-sm leading-relaxed font-sans">{story.description}</p>
        </div>
      </motion.div>
    </div>
  )
}
