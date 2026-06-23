import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Andificus — Andrew Wentzloff'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  // Fetch Cinzel font for the image
  const cinzelFontData = await fetch(
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400&display=swap'
  ).then(async (res) => {
    const css = await res.text()
    const fontUrl = css.match(/src: url\((.+?)\) format/)?.[1]
    if (!fontUrl) return null
    return fetch(fontUrl).then((r) => r.arrayBuffer())
  })

  // Base URL for loading the mark image
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://andificus.com'
      : 'http://localhost:3000'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient gold glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(212,168,67,0.18) 0%, rgba(212,168,67,0.06) 40%, transparent 68%)',
          }}
        />

        {/* Andificus mark */}
        <img
          src={`${baseUrl}/images/andificus-mark.png`}
          width={160}
          height={160}
          style={{ objectFit: 'contain', position: 'relative' }}
        />

        {/* ANDIFICUS wordmark */}
        <div
          style={{
            fontFamily: 'Cinzel',
            fontSize: 88,
            fontWeight: 400,
            letterSpacing: '0.24em',
            color: 'rgba(217, 217, 217, 0.92)',
            textTransform: 'uppercase',
            position: 'relative',
            lineHeight: 1,
          }}
        >
          ANDIFICUS
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: 'Cinzel',
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: '0.18em',
            color: '#999999',
            position: 'relative',
          }}
        >
          Andrew Wentzloff
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.28em',
            color: 'rgba(212, 168, 67, 0.75)',
            textTransform: 'uppercase',
            position: 'relative',
          }}
        >
          Create · Explore · Understand
        </div>

        {/* Bottom gold hairline */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 120,
            height: 1,
            background: 'rgba(212, 168, 67, 0.3)',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: cinzelFontData
        ? [{ name: 'Cinzel', data: cinzelFontData, style: 'normal', weight: 400 }]
        : [],
    }
  )
}
