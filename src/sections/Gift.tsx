import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'
import { Copy, CreditCard, QrCode } from 'lucide-react'

const banks = [
  {
    bank: 'Bank BJB (Jabar Banten)',
    accountNumber: '0012345678901',
    accountName: 'Asep Sunandar Sunarya',
    icon: CreditCard,
  },
  {
    bank: 'Bank BCA',
    accountNumber: '8901234567',
    accountName: 'Siti Nurhaliza',
    icon: CreditCard,
  },
]

export default function Gift() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <SectionWrapper className="bg-sunda-cream">
      <div className="text-center mb-12">
        <p className="text-sunda-green text-xs tracking-[0.3em] uppercase font-sans mb-3">Wedding Gift</p>
        <h2 className="font-display text-4xl sm:text-5xl text-sunda-brown">Kado Digital</h2>
        <OrnamentDivider />
        <p className="text-sm text-sunda-brown/60 font-sans max-w-md mx-auto">
          Du'a pangjurung laku ti sadayana mangrupikeun kado anu paling berharga. Nanging upami Bapa/Ibu/Saderek hoyong masihan tanda asih, sim kuring nyadiakeun informasi ieu:
        </p>
      </div>

      {/* QRIS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl p-8 bg-white leaf-shadow border border-sunda-green/5 text-center mb-8 max-w-sm mx-auto"
      >
        <div className="flex items-center justify-center mb-4">
          <QrCode className="w-5 h-5 text-sunda-green mr-2" />
          <h3 className="font-display text-lg text-sunda-brown">QRIS</h3>
        </div>
        <div className="w-48 h-48 mx-auto bg-sunda-cream-dark rounded-xl flex items-center justify-center border border-sunda-green/10">
          <div className="text-center">
            <QrCode className="w-16 h-16 text-sunda-green/20 mx-auto mb-2" />
            <p className="text-xs text-sunda-brown/40 font-sans">QR Code</p>
          </div>
        </div>
        <p className="text-xs text-sunda-brown/50 font-sans mt-4">Scan kanggo pembayaran via QRIS</p>
      </motion.div>

      {/* Bank Transfer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {banks.map((bank, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="rounded-2xl p-6 bg-white leaf-shadow border border-sunda-green/5 text-center"
          >
            <bank.icon className="w-8 h-8 text-sunda-green mx-auto mb-3" />
            <h4 className="font-sans text-sm font-medium text-sunda-brown mb-1">{bank.bank}</h4>
            <p className="font-display text-xl text-sunda-brown mb-1">{bank.accountNumber}</p>
            <p className="text-xs text-sunda-brown/60 font-sans mb-4">a.n. {bank.accountName}</p>
            <button
              onClick={() => copyToClipboard(bank.accountNumber, index)}
              className="inline-flex items-center px-4 py-2 bg-sunda-green/5 border border-sunda-green/20 text-sunda-green text-xs tracking-wide rounded-full transition-all hover:bg-sunda-green hover:text-white"
            >
              <Copy className="w-3 h-3 mr-2" />
              {copiedIndex === index ? 'Tos Disalin!' : 'Salin'}
            </button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
