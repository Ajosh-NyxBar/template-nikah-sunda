import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'
import { Send, Check } from 'lucide-react'

export default function RSVP() {
  const [form, setForm] = useState({ name: '', attendance: 'hadir', guests: '1', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <SectionWrapper className="bg-sunda-green text-sunda-cream">
      <div className="text-center mb-12">
        <p className="text-sunda-gold text-xs tracking-[0.3em] uppercase font-sans mb-3">RSVP</p>
        <h2 className="font-display text-4xl sm:text-5xl text-sunda-cream">Konfirmasi Kasumpingan</h2>
        <OrnamentDivider />
      </div>

      <div className="max-w-lg mx-auto">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center rounded-2xl p-10 bg-sunda-green-light/40 border border-sunda-gold/10"
          >
            <div className="w-16 h-16 rounded-full bg-sunda-gold/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-sunda-gold" />
            </div>
            <h3 className="font-display text-2xl text-sunda-cream mb-2">Hatur Nuhun!</h3>
            <p className="text-sm text-sunda-cream/60 font-sans">
              Konfirmasi kasumpingan Anjeun parantos sim kuring tampi. Sim kuring pisan ngantosan kasumpingan Anjeun.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl p-8 bg-sunda-green-light/40 border border-sunda-gold/10 space-y-5">
            <div>
              <label className="block text-xs text-sunda-cream/60 uppercase tracking-widest mb-2 font-sans">Nami Lengkep</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-transparent border-b border-sunda-gold/20 py-3 text-sunda-cream font-sans text-sm focus:outline-none focus:border-sunda-gold transition-colors placeholder:text-sunda-cream/30"
                placeholder="Lebetkeun nami Anjeun"
              />
            </div>

            <div>
              <label className="block text-xs text-sunda-cream/60 uppercase tracking-widest mb-2 font-sans">Kasumpingan</label>
              <div className="flex gap-4">
                {[
                  { value: 'hadir', label: 'Sumping' },
                  { value: 'tidak', label: 'Teu Tiasa' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setForm({ ...form, attendance: opt.value })}
                    className={`flex-1 py-3 border rounded-full text-xs tracking-widest uppercase transition-all font-sans ${
                      form.attendance === opt.value
                        ? 'border-sunda-gold bg-sunda-gold/10 text-sunda-gold'
                        : 'border-sunda-gold/15 text-sunda-cream/50 hover:border-sunda-gold/30'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {form.attendance === 'hadir' && (
              <div>
                <label className="block text-xs text-sunda-cream/60 uppercase tracking-widest mb-2 font-sans">Jumlah Tamu</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-transparent border-b border-sunda-gold/20 py-3 text-sunda-cream font-sans text-sm focus:outline-none focus:border-sunda-gold"
                >
                  <option value="1" className="bg-sunda-green text-sunda-cream">1 Jalmi</option>
                  <option value="2" className="bg-sunda-green text-sunda-cream">2 Jalmi</option>
                  <option value="3" className="bg-sunda-green text-sunda-cream">3 Jalmi</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs text-sunda-cream/60 uppercase tracking-widest mb-2 font-sans">Pesen (Opsional)</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full bg-transparent border-b border-sunda-gold/20 py-3 text-sunda-cream font-sans text-sm focus:outline-none focus:border-sunda-gold resize-none placeholder:text-sunda-cream/30"
                placeholder="Tulis ucapan kanggo panganten..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center py-3.5 border border-sunda-gold text-sunda-gold text-xs tracking-widest uppercase rounded-full transition-all hover:bg-sunda-gold hover:text-sunda-green"
            >
              <Send className="w-3 h-3 mr-2" />
              Kirim Konfirmasi
            </button>
          </form>
        )}
      </div>
    </SectionWrapper>
  )
}
