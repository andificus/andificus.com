'use client'

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
  { name: 'Azure AD',        category: 'Cloud',           description: 'Identity management, enterprise SSO, and access control at scale.' },
  { name: 'Vercel',          category: 'Deployment',      description: 'Automatic deploys on every push to the main branch via GitHub.' },
  { name: 'GitHub',          category: 'Version Control', description: 'Source of truth for all code — full commit history from day one.' },
]

const SERVICES = [
  {
    icon: '🏗️',
    title: 'IT Infrastructure',
    desc: 'Servers, networking, endpoint management, and enterprise environments across large multi-location organizations.',
  },
  {
    icon: '☁️',
    title: 'Cloud & Azure',
    desc: 'Azure AD, identity management, and cloud operations. Building toward full multi-cloud expertise.',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Modern full-stack applications built with Next.js, React, and TypeScript — from architecture to production.',
  },
  {
    icon: '🔐',
    title: 'IT Security',
    desc: 'RACF, Windows security, GRC workflows, and security analysis in high-stakes enterprise settings.',
  },
]

const TECH_TAGS = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel']

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
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 12, marginBottom: 0 }}
        >
          IT Professional and Web Developer
        </motion.p>

        <HeroText text="Andrew Wentzloff." />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 620, margin: '0 0 32px' }}
        >
          15 years of hands-on IT experience across infrastructure, cloud, security, and
          modern web development. Based in the Quad Cities — open to remote, hybrid, and
          local opportunities.
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
            <a href="#projects" className="btn btnGhost">View Projects</a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── What I Do ── */}
      <SectionHeading
        title="What I Do"
        subtitle="A career built across the full width of IT — from the data center to the browser."
      />

      <StaggerGrid style={{
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        marginBottom: 28,
      }}>
        {SERVICES.map((service) => (
          <StaggerCard key={service.title}>
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
                {service.icon}
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>{service.title}</h3>
              <p className="p" style={{ margin: 0 }}>{service.desc}</p>
            </div>
          </StaggerCard>
        ))}
      </StaggerGrid>

      {/* ── Featured Project ── */}
      <div id="projects">
        <SectionHeading
          title="Featured Project"
          subtitle="What I have been building to sharpen real-world web development skills."
        />
      </div>

      <FadeUp>
        <div className="card" style={{ padding: 32, marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
            <div>
              <p style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--link)',
                margin: '0 0 6px',
              }}>
                Personal Project
              </p>
              <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>
                Andificus
              </h3>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <motion.a
                href="https://andificus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btnPrimary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Live Site
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

          <p className="p" style={{ maxWidth: 680, marginBottom: 20 }}>
            A personal web application built from scratch as a hands-on learning project.
            Covers the full development lifecycle: architecture decisions, authentication,
            database design, security headers, and production deployment. Achieved a
            perfect 100/100/100/100 Lighthouse score.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {TECH_TAGS.map((tag) => (
              <span key={tag} style={{
                fontSize: 12,
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: 20,
                background: 'color-mix(in srgb, var(--link) 12%, transparent)',
                color: 'var(--link)',
                letterSpacing: '0.02em',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>

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
          marginBottom: 28,
        }}
      >
        {STACK.map((item, i) => (
          <StackCard key={item.name} item={item} index={i} />
        ))}
      </motion.div>

      {/* ── About teaser ── */}
      <FadeUp>
        <div className="card" style={{ padding: 32, marginTop: 34, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <h2 className="h2" style={{ margin: '0 0 12px' }}>Andrew Wentzloff</h2>
            <p className="p" style={{ maxWidth: 640 }}>
              IT professional by trade, builder by nature. Self-taught, no degree, no shortcuts —
              just a genuine curiosity for how things work that started with a Tandy 1000HX and
              has not slowed down since.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ alignSelf: 'flex-start' }}>
            <Link href="/about" className="btn btnGhost">Full Story</Link>
          </motion.div>
        </div>
      </FadeUp>

      {/* ── Contact ── */}
      <FadeUp>
        <div className="card" style={{ padding: 32, marginBottom: 10, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <h2 className="h2" style={{ margin: '0 0 12px' }}>Open to Opportunities</h2>
            <p className="p" style={{ maxWidth: 640 }}>
              Currently available for infrastructure, cloud, IT generalist, or web development
              roles. Remote, hybrid, or local to the Quad Cities area.
            </p>
          </div>
          <motion.a
            href="https://www.linkedin.com/in/andywentzloff"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary"
            style={{ alignSelf: 'flex-start' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Connect on LinkedIn
          </motion.a>
        </div>
      </FadeUp>

    </main>
  )
}