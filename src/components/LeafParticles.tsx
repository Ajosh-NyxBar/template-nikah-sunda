export default function LeafParticles() {
  const leaves = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 7,
    size: 8 + Math.random() * 12,
    opacity: 0.15 + Math.random() * 0.25,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.left}%`,
            bottom: '-20px',
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            opacity: leaf.opacity,
            animation: `float-up ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-sunda-green w-full h-full">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4 0 8.5-3 9-8.5S18 4 18 4s-1 1.5-1 4z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
