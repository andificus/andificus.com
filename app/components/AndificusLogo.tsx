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
          fontFamily: "Cinzel, 'Times New Roman', serif",
          fontSize: Math.round(height * 0.42),
          letterSpacing: '0.12em',
          color: 'var(--text)',
          lineHeight: 1,
          userSelect: 'none',
        }}>
          ANDIFICUS
        </span>
      )}
    </span>
  )
}
