import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'
import { Calendar, Clock, MapPin } from 'lucide-react'

const events = [
  {
    title: 'Akad Nikah',
    date: 'Saptu, 20 Desember 2026',
    time: '08:00 - 10:00 WIB',
    location: 'Masjid Agung Bandung',
    address: 'Jl. Asia Afrika No. 81, Bandung',
  },
  {
    title: 'Resepsi',
    date: 'Saptu, 20 Desember 2026',
    time: '11:00 - 14:00 WIB',
    location: 'Gedung Landmark Convention Hall',
    address: 'Jl. Braga No. 129, Bandung',
  },
]

export default function EventInfo() {
  return (
    <SectionWrapper className="bg-sunda-cream">
      <div className="text-center mb-16">
        <p className="text-sunda-green text-xs tracking-[0.3em] uppercase font-sans mb-3">Save The Date</p>
        <h2 className="font-display text-4xl sm:text-5xl text-sunda-brown">Waktos & Tempat</h2>
        <OrnamentDivider />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="rounded-2xl p-8 bg-white leaf-shadow border border-sunda-green/5 text-center"
          >
            {/* Leaf top ornament */}
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 40 20" className="w-10 h-5 text-sunda-green/30" fill="currentColor">
                <path d="M20 2 Q12 8, 5 15 Q12 12, 20 8 Q28 12, 35 15 Q28 8, 20 2Z" />
              </svg>
            </div>

            <h3 className="font-display text-2xl text-sunda-brown mb-6">{event.title}</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-4 h-4 text-sunda-green" />
                <span className="text-sm text-sunda-brown/80 font-sans">{event.date}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-4 h-4 text-sunda-green" />
                <span className="text-sm text-sunda-brown/80 font-sans">{event.time}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-4 h-4 text-sunda-green" />
                <div>
                  <p className="text-sm font-medium text-sunda-brown font-sans">{event.location}</p>
                  <p className="text-xs text-sunda-brown/60 font-sans">{event.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-sunda-green/5">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 bg-sunda-green/5 border border-sunda-green/20 text-sunda-green text-xs tracking-widest uppercase rounded-full transition-all hover:bg-sunda-green hover:text-white hover:border-sunda-green"
              >
                Buka Maps
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
