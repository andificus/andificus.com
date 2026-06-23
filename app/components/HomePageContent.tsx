'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FadeUp,
  StaggerGrid,
  StaggerCard,
  SectionHeading,
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
        boxShadow: '0 0 0 1px var(--gold), 0 8px 24px var(--shadow)',
        transition: { duration: 0.2 },
      }}
      className="card"
      style={{ padding: '14px 16px', cursor: 'default' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <motion.span
          animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.4, 0.9] }}
          transition={{ duration: 2, delay: 0.5 + index * 0.15, repeat: 2, ease: 'easeInOut' }}
          style={{
            display: 'block',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'var(--gold)',
            flexShrink: 0,
          }}
        />
        <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>
          {item.name}
        </span>
        <span style={{
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          opacity: 0.7,
          marginLeft: 'auto',
        }}>
          {item.category}
        </span>
      </div>
      <p className="p" style={{ fontSize: 12, margin: 0 }}>
        {item.description}
      </p>
    </motion.div>
  )
}

export default function HomePageContent() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════════
          HERO — full viewport height, centered monument
      ══════════════════════════════════════════════════════ */}
      <section style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 28px 60px',
        /* No overflow: hidden — it clips drop-shadow filters */
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 700,
          width: '100%',
        }}>

          {/* ── Mark + glow ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'relative',
              marginBottom: 32,
              /* inline-block so the wrapper shrinks to image size,
                 which lets the glow div use % sizing correctly */
              display: 'inline-block',
            }}
          >
            {/* Ambient glow — radial gradient avoids the blur-clipping issue on mobile */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '200%',
                paddingBottom: '200%',
                background: 'radial-gradient(circle at center, rgba(212,168,67,0.14) 0%, rgba(212,168,67,0.06) 35%, transparent 65%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* The mark itself */}
            <Image
              src="/images/andificus-mark.png"
              alt="Andificus symbol"
              width={384}
              height={384}
              priority
              style={{
                display: 'block',
                objectFit: 'contain',
                /* clamp gives: 256px mobile → 288px ~720px → 384px desktop */
                width: 'clamp(256px, 40vw, 384px)',
                height: 'auto',
                filter: 'drop-shadow(0 0 60px rgba(200,160,80,0.5))',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </motion.div>

          {/* ── ANDIFICUS heading ── */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
              hidden: {},
            }}
            style={{
              fontFamily: "var(--font-cinzel), Georgia, 'Times New Roman', serif",
              /* mobile 30px → ~48px at 640px → 72px at 960px → 96px at 1280px */
              fontSize: 'clamp(30px, 7.5vw, 96px)',
              fontWeight: 400,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(217, 217, 217, 0.9)',
              lineHeight: 1.05,
              margin: '0 0 14px',
              /* offset the tracking so the word appears visually centered */
              textIndent: '0.3em',
            }}
          >
            {'ANDIFICUS'.split('').map((char, i) => (
              <motion.span
                key={i}
                style={{ display: 'inline-block' }}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* ── Technologist · Creator · Lifelong Learner ── */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              fontSize: 'clamp(10px, 1.2vw, 14px)',
              color: '#D4A843',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
              textIndent: '0.28em',
              fontWeight: 500,
            }}
          >
            Technologist · Creator · Lifelong Learner
          </motion.p>

          {/* ── Tagline ── */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
              maxWidth: 480,
              margin: '0 0 36px',
            }}
          >
            Building software, exploring cloud infrastructure, creating visual art,
            and documenting the journey.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/about" className="btn btnPrimary">About Me</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a href="#connect" className="btn btnGhost">Connect</a>
            </motion.div>
          </motion.div>

          {/* ── Scroll indicator ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            style={{ marginTop: 56 }}
            aria-hidden="true"
          >
            <div style={{
              width: 1,
              height: 56,
              background: 'linear-gradient(to bottom, rgba(212,168,67,0.6), transparent)',
              margin: '0 auto',
            }} />
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTENT — below the fold
      ══════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 28px 80px' }}>

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
              <div className="card" style={{
                padding: 28,
                borderTop: '2px solid var(--gold)',
                height: '100%',
                boxSizing: 'border-box',
              }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>
                  {item.icon}
                </div>
                <h3 style={{
                  margin: '0 0 10px',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                }}>
                  {item.title}
                </h3>
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
            gap: 10,
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
          <div id="connect" className="card" style={{
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}>
            <div>
              <h2 className="h2" style={{ margin: '0 0 12px' }}>Connect</h2>
              <p className="p" style={{ maxWidth: 520, margin: 0 }}>
                Find me on LinkedIn and GitHub, or read the full story on the About page.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
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

      </div>
    </main>
  )
}
