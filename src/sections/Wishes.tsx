import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'
import { MessageCircle, Send } from 'lucide-react'

interface Wish {
  id: number
  name: string
  message: string
  date: string
}

const initialWishes: Wish[] = [
  { id: 1, name: 'Bpk. H. Cecep Hermawan', message: 'Wilujeng kanggo Asep sareng Neng Siti! Mugi janten kulawarga anu sakinah mawaddah warahmah. Aamiin Ya Robbal Alamin.', date: '15 Des 2026' },
  { id: 2, name: 'Ibu Hj. Neneng Sukaesih', message: 'Alhamdulillah bingah pisan ningali aranjeun duaan nikah. Mugi langgeng dugi ka akhir hayat. Aamiin.', date: '14 Des 2026' },
  { id: 3, name: 'Keluarga Besar Priangan', message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang bahagia lahir dan batin. Hatur nuhun kana undanganana.', date: '13 Des 2026' },
]

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    const newWish: Wish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    }
    setWishes([newWish, ...wishes])
    setName('')
    setMessage('')
  }

  return (
    <SectionWrapper className="bg-sunda-cream">
      <div className="text-center mb-12">
        <p className="text-sunda-green text-xs tracking-[0.3em] uppercase font-sans mb-3">Wishes</p>
        <h2 className="font-display text-4xl sm:text-5xl text-sunda-brown">Ucapan & Du'a</h2>
        <OrnamentDivider />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="rounded-2xl p-6 bg-white leaf-shadow border border-sunda-green/5 mb-8 max-w-lg mx-auto">
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nami Anjeun"
            className="w-full bg-transparent border-b border-sunda-green/10 py-2.5 text-sunda-brown font-sans text-sm focus:outline-none focus:border-sunda-green transition-colors placeholder:text-sunda-brown/30"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis ucapan sareng du'a kanggo panganten..."
            rows={3}
            className="w-full bg-transparent border-b border-sunda-green/10 py-2.5 text-sunda-brown font-sans text-sm focus:outline-none focus:border-sunda-green resize-none placeholder:text-sunda-brown/30"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2.5 bg-sunda-green/5 border border-sunda-green/20 text-sunda-green text-xs tracking-widest uppercase rounded-full transition-all hover:bg-sunda-green hover:text-white"
          >
            <Send className="w-3 h-3 mr-2" />
            Kirim Ucapan
          </button>
        </div>
      </form>

      {/* Wishes List */}
      <div className="max-w-lg mx-auto space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {wishes.map((wish, index) => (
          <motion.div
            key={wish.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-xl p-5 bg-white leaf-shadow border border-sunda-green/5"
          >
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 rounded-full bg-sunda-green/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-sunda-green" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-sans text-sm font-medium text-sunda-brown">{wish.name}</h4>
                  <span className="text-xs text-sunda-brown/40 font-sans">{wish.date}</span>
                </div>
                <p className="text-sm text-sunda-brown/70 font-sans leading-relaxed">{wish.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
