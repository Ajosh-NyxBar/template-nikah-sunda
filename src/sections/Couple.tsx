import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'

export default function Couple() {
  return (
    <SectionWrapper className="bg-sunda-cream pt-28">
      <div className="text-center">
        <p className="text-sunda-green text-xs tracking-[0.3em] uppercase font-sans mb-2">
          Bismillahirrahmanirrahim
        </p>
        <p className="text-sunda-brown/70 text-sm font-sans max-w-lg mx-auto leading-relaxed mb-12">
          Assalamu'alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat sareng ridho Allah SWT, sim kuring bermaksad ngahaturkeun ondangan ka Bapa/Ibu/Saderek sadayana kanggo sumping dina acara pernikahan putra-putri sim kuring:
        </p>

        <OrnamentDivider />

        {/* Groom */}
        <div className="mb-12">
          <div className="w-36 h-36 mx-auto mb-6 rounded-full border-2 border-sunda-green/20 overflow-hidden bg-sunda-cream-dark flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sunda-green/10 to-sunda-gold/10 flex items-center justify-center">
              <span className="font-display text-4xl text-sunda-green/40">AS</span>
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-sunda-brown mb-2">
            Asep Sunandar Sunarya
          </h2>
          <p className="text-sunda-brown/60 text-sm font-sans">
            Putra kahiji ti
          </p>
          <p className="text-sunda-brown/80 text-sm font-sans font-medium">
            Bpk. H. Ahmad Sunarya & Ibu Hj. Euis Komariah
          </p>
        </div>

        {/* Ampersand */}
        <div className="flex items-center justify-center my-8">
          <div className="h-px w-16 bg-sunda-green/20" />
          <div className="mx-6 w-12 h-12 rounded-full border border-sunda-gold/30 flex items-center justify-center">
            <span className="text-sunda-gold text-2xl font-display italic">&</span>
          </div>
          <div className="h-px w-16 bg-sunda-green/20" />
        </div>

        {/* Bride */}
        <div className="mt-12">
          <div className="w-36 h-36 mx-auto mb-6 rounded-full border-2 border-sunda-green/20 overflow-hidden bg-sunda-cream-dark flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sunda-gold/10 to-sunda-green/10 flex items-center justify-center">
              <span className="font-display text-4xl text-sunda-green/40">NS</span>
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-sunda-brown mb-2">
            Neng Siti Nurhaliza
          </h2>
          <p className="text-sunda-brown/60 text-sm font-sans">
            Putri kadua ti
          </p>
          <p className="text-sunda-brown/80 text-sm font-sans font-medium">
            Bpk. H. Dede Kosasih & Ibu Hj. Imas Sumiati
          </p>
        </div>

        <OrnamentDivider className="mt-12" />
      </div>
    </SectionWrapper>
  )
}
