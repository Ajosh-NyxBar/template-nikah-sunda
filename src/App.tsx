import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Cover from './sections/Cover'
import Couple from './sections/Couple'
import LoveStory from './sections/LoveStory'
import EventInfo from './sections/EventInfo'
import Countdown from './sections/Countdown'
import Gallery from './sections/Gallery'
import Location from './sections/Location'
import Gift from './sections/Gift'
import RSVP from './sections/RSVP'
import Wishes from './sections/Wishes'
import Footer from './sections/Footer'
import LeafParticles from './components/LeafParticles'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-sunda-cream">
      <LeafParticles />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <Cover key="cover" onOpen={() => setIsOpen(true)} />
        ) : (
          <main key="content" className="relative z-10">
            <Couple />
            <LoveStory />
            <EventInfo />
            <Countdown />
            <Gallery />
            <Location />
            <Gift />
            <RSVP />
            <Wishes />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  )
}
