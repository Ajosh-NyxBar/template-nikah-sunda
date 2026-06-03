import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'

const images = [
  { id: 1, aspect: 'aspect-[3/4]', src: 'https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=400&h=530&fit=crop' },
  { id: 2, aspect: 'aspect-square', src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' },
  { id: 3, aspect: 'aspect-[4/5]', src: 'https://images.unsplash.com/photo-1561451213-87de08bb7c37?w=400&h=500&fit=crop' },
  { id: 4, aspect: 'aspect-[3/4]', src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=530&fit=crop' },
  { id: 5, aspect: 'aspect-square', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=400&fit=crop' },
  { id: 6, aspect: 'aspect-[4/5]', src: 'https://images.unsplash.com/photo-1500049242364-5f500807cdd7?w=400&h=500&fit=crop' },
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
        <img
          src={image.src}
          alt={`Gallery ${image.id}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-sunda-green/0 group-hover:bg-sunda-green/10 transition-colors duration-500 rounded-2xl" />
      </div>
    </motion.div>
  )
}
