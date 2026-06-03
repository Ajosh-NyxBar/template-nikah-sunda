import OrnamentDivider from '../components/OrnamentDivider'

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-sunda-green text-sunda-cream text-center">
      <div className="max-w-md mx-auto">
        {/* Leaf ornament */}
        <div className="flex justify-center mb-8 opacity-30">
          <svg viewBox="0 0 80 30" className="w-20 h-8 text-sunda-gold" fill="currentColor">
            <path d="M40 5 Q30 12, 20 18 Q30 15, 40 12 Q50 15, 60 18 Q50 12, 40 5Z" />
            <circle cx="40" cy="15" r="2" />
          </svg>
        </div>

        <p className="text-sunda-cream/50 text-sm font-sans leading-relaxed mb-4">
          Mangrupikeun hiji kahormatan sareng kabahagiaan kanggo sim kuring upami Bapa/Ibu/Saderek kersa sumping kanggo maparin du'a restu ka kadua panganten.
        </p>

        <p className="font-display text-2xl text-sunda-gold mb-2">
          Hatur Nuhun
        </p>

        <p className="text-sunda-cream/40 text-xs font-sans tracking-wider">
          Kana kasumpingan sareng du'a restuna, sim kuring ngahaturkeun nuhun
        </p>

        <OrnamentDivider className="my-8" />

        <div className="space-y-1">
          <p className="font-display text-lg text-sunda-cream/80">
            Asep & Neng Siti
          </p>
          <p className="text-xs text-sunda-cream/30 font-sans tracking-widest uppercase">
            20 Desember 2026 - Bandung
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-sunda-gold/10">
          <p className="text-xs text-sunda-cream/20 font-sans">
            Created with love by Cipta Grafika
          </p>
        </div>
      </div>
    </footer>
  )
}
