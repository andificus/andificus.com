'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FadeUp,
  StaggerGrid,
  StaggerCard,
  SectionHeading,
  HeroText,
} from './Motion'

const STACK = [
  { name: 'Next.js 16',      category: 'Framework',       description: 'App Router, server components, and full-stack rendering patterns.' },
  { name: 'React 19',        category: 'UI',              description: 'Component-based UI with hooks and client/server boundaries.' },
  { name: 'TypeScript',      category: 'Language',        description: 'Strict typing throughout — components, data shapes, and APIs.' },
  { name: 'Tailwind CSS v4', category: 'Styling',         description: 'Utility classes alongside a custom CSS design token system.' },
  { name: 'Framer Motion',   category: 'Animation',       description: 'Scroll-triggered reveals, stagger animations, and hover states.' },
  { name: 'Entra ID',        category: 'Cloud',           description: 'Identity management, enterprise SSO, and access control at scale.' },
  { name: 'Vercel',          category: 'Deployment',      description: 'Automatic deploys on every push to the main branch via GitHub.' },
  { name: 'GitHub',          category: 'Version Control', description: 'Source of truth for all code — full commit history from day one.' },
]

const FOCUS = [
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    desc: 'Microsoft Entra ID, identity management, and enterprise-scale cloud operations. Building deep expertise across the major cloud platforms.',
  },
  {
    icon: '💻',
    title: 'Software Development',
    desc: 'Building modern web applications with Next.js, React, and TypeScript. From architecture decisions to production deployments.',
  },
  {
    icon: '📷',
    title: 'Photography',
    desc: 'Capturing moments and studying light. A creative practice that sharpens the same eye for detail that informs good design and good code.',
  },
]

function StackCard({ item, index }: { item: typeof STACK[0], index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 0 0 1.5px var(--link), 0 8px 24px var(--shadow)',
        transition: { duration: 0.2 },
      }}
      className="card"
      style={{ padding: '14px 16px', cursor: 'default' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
          style={{ display: 'inline-flex', flexShrink: 0 }}
        >
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.4, 0.9] }}
            transition={{ duration: 2, delay: 0.5 + index * 0.15, repeat: 2, ease: 'easeInOut' }}
            style={{
              display: 'block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'var(--link)',
              flexShrink: 0,
            }}
          />
        </motion.span>
        <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>
          {item.name}
        </span>
        <span style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--link)',
          opacity: 0.75,
          marginLeft: 'auto',
        }}>
          {item.category}
        </span>
      </div>
      <p className="p" style={{ fontSize: 13, margin: 0 }}>
        {item.description}
      </p>
    </motion.div>
  )
}

export default function HomePageContent() {
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: '72px 28px' }}>

      {/* ── Hero ── */}
      <section style={{ marginBottom: 80 }}>

        {/* Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 32 }}
        >
          <Image
            src="/images/andificus-mark.png"
            alt="Andificus"
            width={160}
            height={160}
            priority
            style={{ display: 'block' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 12, marginBottom: 0 }}
        >
          Technologist · Creator · Lifelong Learner
        </motion.p>

        <HeroText text="Andrew Wentzloff" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 620, margin: '0 0 32px' }}
        >
          Building software, exploring cloud infrastructure, creating visual art,
          and documenting the journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/about" className="btn btnPrimary">About Me</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a href="#connect" className="btn btnGhost">Connect</a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Current Focus ── */}
      <SectionHeading
        title="Current Focus"
        subtitle="What I am actively building, learning, and creating right now."
      />

      <StaggerGrid style={{
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        marginBottom: 56,
      }}>
        {FOCUS.map((item) => (
          <StaggerCard key={item.title}>
            <div className="card" style={{ padding: 24, borderTop: '3px solid var(--link)', height: '100%', boxSizing: 'border-box' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'color-mix(in srgb, var(--link) 15%, transparent)',
                fontSize: 24,
                marginBottom: 16,
              }}>
                {item.icon}
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>{item.title}</h3>
              <p className="p" style={{ margin: 0 }}>{item.desc}</p>
            </div>
          </StaggerCard>
        ))}
      </StaggerGrid>

      {/* ── Skills ── */}
      <SectionHeading
        title="Skills and Tools"
        subtitle="Technologies I build with and platforms I work across."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
        style={{
          display: 'grid',
          gap: 12,
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          marginBottom: 56,
        }}
      >
        {STACK.map((item, i) => (
          <StackCard key={item.name} item={item} index={i} />
        ))}
      </motion.div>

      {/* ── Connect ── */}
      <FadeUp>
        <div id="connect" className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <h2 className="h2" style={{ margin: '0 0 12px' }}>Connect</h2>
            <p className="p" style={{ maxWidth: 560, margin: 0 }}>
              Find me on LinkedIn and GitHub, or read the full story on the About page.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <motion.a
              href="https://www.linkedin.com/in/andywentzloff"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnPrimary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/andificus"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnGhost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </FadeUp>

    </main>
  )
}
