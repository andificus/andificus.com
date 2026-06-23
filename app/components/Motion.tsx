'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ── Fade + slide up on scroll ──────────────────────────────────────────────
export function FadeUp({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ── Staggered grid of cards ────────────────────────────────────────────────
export function StaggerGrid({
  children,
  style,
  className,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  )
}

// ── Individual card in a stagger grid ─────────────────────────────────────
export function StaggerCard({
  children,
  className,
  style,
  hoverLift = true,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  hoverLift?: boolean
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={hoverLift ? { y: -4, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  )
}

// ── Section heading with scroll reveal ────────────────────────────────────
export function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginTop: 48, marginBottom: 20 }}
    >
      <h2 className="h2" style={{ margin: 0 }}>{title}</h2>
      {subtitle && (
        <p className="p" style={{ marginTop: 8 }}>{subtitle}</p>
      )}
    </motion.div>
  )
}

// ── Hero text — word-by-word reveal in Cinzel ─────────────────────────────
export function HeroText({ text }: { text: string }) {
  const words = text.split(' ')

  return (
    <motion.h1
      style={{
        fontFamily: "var(--font-cinzel), Georgia, 'Times New Roman', serif",
        fontSize: 'clamp(2.2rem, 6vw, 4rem)',
        fontWeight: 400,
        lineHeight: 1.1,
        letterSpacing: '0.04em',
        margin: '12px 0 16px',
        color: 'var(--text)',
      }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
