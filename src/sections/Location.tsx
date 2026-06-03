import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'
import { MapPin } from 'lucide-react'

export default function Location() {
  return (
    <SectionWrapper className="bg-sunda-green text-sunda-cream">
      <div className="text-center mb-12">
        <p className="text-sunda-gold text-xs tracking-[0.3em] uppercase font-sans mb-3">Location</p>
        <h2 className="font-display text-4xl sm:text-5xl text-sunda-cream">Lokasi Acara</h2>
        <OrnamentDivider />
      </div>

      <div className="rounded-2xl overflow-hidden border border-sunda-gold/10">
        <div className="aspect-[16/9] sm:aspect-[2/1] bg-sunda-green-light relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467101726!2d107.6098!3d-6.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e631a8a9f57b%3A0xdc0305f54e6a0f!2sGedung%20Sate!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>

        <div className="p-6 sm:p-8 text-center bg-sunda-green-light/50">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <MapPin className="w-5 h-5 text-sunda-gold" />
            <h3 className="font-display text-xl text-sunda-cream">Gedung Landmark Convention Hall</h3>
          </div>
          <p className="text-sm text-sunda-cream/60 font-sans mb-6">
            Jl. Braga No. 129, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111
          </p>
          <a
            href="https://maps.app.goo.gl/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-sunda-gold/40 text-sunda-gold text-xs tracking-widest uppercase rounded-full transition-all hover:bg-sunda-gold hover:text-sunda-green"
          >
            <MapPin className="w-3 h-3 mr-2" />
            Petunjuk Arah
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
