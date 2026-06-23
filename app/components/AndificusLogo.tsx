import Image from 'next/image'

interface AndificusLogoProps {
  height?: number
  showWordmark?: boolean
}

export default function AndificusLogo({ height = 42, showWordmark = true }: AndificusLogoProps) {
  const markSize = Math.round(height * 0.95)

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <Image
        src="/images/andificus-mark.png"
        alt="Andificus"
        width={markSize}
        height={markSize}
        priority
        style={{ display: 'block', objectFit: 'contain' }}
      />
      {showWordmark && (
        <span style={{
          fontFamily: "var(--font-cinzel), Georgia, 'Times New Roman', serif",
          fontSize: Math.round(height * 0.5),
          letterSpacing: '0.14em',
          color: 'var(--text)',
          lineHeight: 1,
          userSelect: 'none',
          textTransform: 'uppercase',
        }}>
          Andificus
        </span>
      )}
    </span>
  )
}
