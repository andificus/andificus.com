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
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={hoverLift ? { y: -6, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  )
}

// ── Section heading with line wipe ────────────────────────────────────────
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
      style={{ marginTop: 34, marginBottom: 18 }}
    >
      <h2 className="h2" style={{ margin: 0 }}>{title}</h2>
      {subtitle && (
        <p className="p" style={{ marginTop: 8 }}>{subtitle}</p>
      )}
    </motion.div>
  )
}

// ── Hero text — word-by-word reveal ───────────────────────────────────────
export function HeroText({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <motion.h1
      style={{
        fontSize: 54,
        lineHeight: 1.05,
        margin: '10px 0 14px',
        letterSpacing: '-0.03em',
      }}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}

// ── Illustration wrapper with hover tilt ──────────────────────────────────
export function IllustrationFrame({
  children,
  aspectRatio = '4 / 3',
}: {
  children: React.ReactNode
  aspectRatio?: string
}) {
  return (
    <motion.div
      className="card"
      style={{ padding: 14 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
    >
      <div style={{ width: '100%', aspectRatio, overflow: 'hidden', borderRadius: 14 }}>
        {children}
      </div>
    </motion.div>
  )
}

// ── Small illustration card (16/9) with hover lift ─────────────────────────
export function IllustrationCard({
  children,
  title,
  list,
  text,
}: {
  children: React.ReactNode
  title: string
  list?: string[]
  text?: string
}) {
  return (
    <motion.div
      className="card"
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div style={{ width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: 14 }}>
        {children}
      </div>
      <h3 className="h2" style={{ marginTop: 14 }}>{title}</h3>
      {list && (
        <ul className="list">
          {list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
      {text && <p className="p">{text}</p>}
    </motion.div>
  )
}
