import { motion } from 'framer-motion'

interface CoverProps {
  onOpen: () => void
}

export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1B5E20 0%, #2E7D32 40%, #1B5E20 100%)' }}
    >
      {/* Background botanical pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 Q50 20 40 35 Q30 20 40 10Z' fill='%23FDF8F0'/%3E%3Cpath d='M20 50 Q30 45 25 60 Q15 55 20 50Z' fill='%23FDF8F0' opacity='0.5'/%3E%3Cpath d='M60 55 Q70 50 65 65 Q55 60 60 55Z' fill='%23FDF8F0' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Decorative corner leaves */}
      <div className="absolute top-8 left-8 opacity-20">
        <svg viewBox="0 0 60 60" className="w-16 h-16 text-sunda-gold" fill="currentColor">
          <path d="M5 55 Q15 30, 40 15 Q30 25, 25 40 Q20 50, 5 55Z" opacity="0.6" />
          <path d="M10 50 Q20 35, 35 25 Q25 35, 20 45 Q15 50, 10 50Z" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-20 rotate-180">
        <svg viewBox="0 0 60 60" className="w-16 h-16 text-sunda-gold" fill="currentColor">
          <path d="M5 55 Q15 30, 40 15 Q30 25, 25 40 Q20 50, 5 55Z" opacity="0.6" />
          <path d="M10 50 Q20 35, 35 25 Q25 35, 20 45 Q15 50, 10 50Z" opacity="0.4" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          {/* Frame */}
          <div className="relative border border-sunda-gold/30 rounded-2xl px-8 py-12 sm:px-12 sm:py-16">
            <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-sunda-gold/50 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-sunda-gold/50 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-sunda-gold/50 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-sunda-gold/50 rounded-br-lg" />

            <p className="text-sunda-gold/70 text-xs tracking-[0.4em] uppercase font-sans mb-6">
              The Wedding of
            </p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="font-display text-5xl sm:text-6xl text-sunda-cream mb-2 leading-tight"
            >
              Asep
            </motion.h1>

            <div className="flex items-center justify-center my-4">
              <div className="h-px w-10 bg-sunda-gold/40" />
              <span className="mx-4 text-sunda-gold text-2xl font-display italic">&</span>
              <div className="h-px w-10 bg-sunda-gold/40" />
            </div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              className="font-display text-5xl sm:text-6xl text-sunda-cream mb-8 leading-tight"
            >
              Neng Siti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sunda-cream/60 text-sm font-sans mb-8"
            >
              Saptu, 20 Desember 2026
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <p className="text-sunda-gold/50 text-xs tracking-widest uppercase mb-3 font-sans">
                Kepada Yth. Bapak/Ibu/Saudara/i
              </p>
              <p className="text-sunda-cream font-serif text-lg mb-8">
                Tamu Undangan
              </p>

              <button
                onClick={onOpen}
                className="group relative px-10 py-3.5 bg-sunda-gold/10 border border-sunda-gold/60 text-sunda-gold text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-500 hover:bg-sunda-gold hover:text-sunda-green"
              >
                Buka Undangan
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
