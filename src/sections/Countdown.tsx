import { useEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import OrnamentDivider from '../components/OrnamentDivider'

const targetDate = new Date('2026-12-20T08:00:00+07:00').getTime()

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = Date.now()
    const diff = Math.max(0, targetDate - now)
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Dinten', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ]

  return (
    <SectionWrapper className="bg-sunda-green text-sunda-cream">
      <div className="text-center">
        <p className="text-sunda-gold text-xs tracking-[0.3em] uppercase font-sans mb-3">Counting Down</p>
        <h2 className="font-display text-4xl sm:text-5xl text-sunda-cream mb-4">Nuju Dinten Bahagia</h2>
        <OrnamentDivider />

        <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto mt-10">
          {units.map((unit) => (
            <div key={unit.label} className="rounded-2xl p-4 sm:p-6 bg-sunda-green-light/40 border border-sunda-gold/10">
              <span className="block font-display text-3xl sm:text-5xl text-sunda-gold">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="block text-[10px] sm:text-xs text-sunda-cream/50 uppercase tracking-widest mt-2 font-sans">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
