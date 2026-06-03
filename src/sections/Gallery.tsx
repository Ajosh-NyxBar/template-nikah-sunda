import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'

const images = [
  { id: 1, aspect: 'aspect-[3/4]', label: 'Prewedding 1' },
  { id: 2, aspect: 'aspect-square', label: 'Prewedding 2' },
  { id: 3, aspect: 'aspect-[4/5]', label: 'Prewedding 3' },
  { id: 4, aspect: 'aspect-[3/4]', label: 'Prewedding 4' },
  { id: 5, aspect: 'aspect-square', label: 'Prewedding 5' },
  { id: 6, aspect: 'aspect-[4/5]', label: 'Prewedding 6' },
]

export default function Gallery() {
  return (
    <SectionWrapper className="bg-sunda-cream">
      <div className="text-center mb-16">
        <p className="text-sunda-green text-xs tracking-[0.3em] uppercase font-sans mb-3">Our Moments</p>
        <h2 className="font-display text-4xl sm:text-5xl text-sunda-brown">Galeri Poto</h2>
        <OrnamentDivider />
      </div>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, index) => (
          <GalleryItem key={img.id} image={img} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}

function GalleryItem({ image, index }: { image: typeof images[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="break-inside-avoid"
    >
      <div className={`${image.aspect} relative overflow-hidden rounded-2xl leaf-shadow border border-sunda-green/5 group cursor-pointer`}>
        <div className="absolute inset-0 bg-gradient-to-br from-sunda-green/10 to-sunda-gold/5 flex items-center justify-center">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-sunda-green/10 flex items-center justify-center mx-auto mb-2">
              <span className="font-display text-xl text-sunda-green/30">{image.id}</span>
            </div>
            <p className="text-xs text-sunda-brown/40 font-sans">{image.label}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-sunda-green/0 group-hover:bg-sunda-green/10 transition-colors duration-500 rounded-2xl" />
      </div>
    </motion.div>
  )
}
