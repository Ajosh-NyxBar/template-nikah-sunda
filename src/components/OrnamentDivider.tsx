export default function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-6 ${className}`}>
      <svg viewBox="0 0 200 24" className="w-48 h-6 text-sunda-gold" fill="currentColor">
        {/* Leaves pattern */}
        <path d="M90 12 Q95 6, 100 12 Q105 6, 110 12" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <path d="M80 12 Q85 8, 90 12" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <path d="M110 12 Q115 8, 120 12" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <circle cx="100" cy="12" r="2.5" />
        <circle cx="75" cy="12" r="1.2" opacity="0.4" />
        <circle cx="125" cy="12" r="1.2" opacity="0.4" />
        <line x1="30" y1="12" x2="70" y2="12" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
        <line x1="130" y1="12" x2="170" y2="12" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
        {/* Tiny leaves */}
        <path d="M60 10 Q63 7, 66 10" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
        <path d="M134 10 Q137 7, 140 10" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      </svg>
    </div>
  )
}
