'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About',   href: '/about' },
  { label: 'Connect', href: '/#connect' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="navbar" role="banner">
        <nav className="navbarInner" aria-label="Main navigation">

          {/* Brand */}
          <Link href="/" className="brandLink" aria-label="Andificus home" onClick={closeMenu}>
            <Image
              src="/images/andificus-mark.png"
              alt="Andificus"
              width={40}
              height={40}
              priority
              style={{ display: 'block', objectFit: 'contain' }}
            />
            <span style={{
              fontFamily: "var(--font-cinzel), Georgia, serif",
              fontSize: '1.2rem',
              letterSpacing: '0.16em',
              color: 'var(--text)',
              userSelect: 'none',
            }}>
              Andificus
            </span>
          </Link>

          {/* Desktop links */}
          <div className="navbarLinks" role="list">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="navLink" role="listitem">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="hamburgerLine" style={{
              transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
            }} />
            <span className="hamburgerLine" style={{
              opacity: menuOpen ? 0 : 1,
            }} />
            <span className="hamburgerLine" style={{
              transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
            }} />
          </button>

        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            className="mobileOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="mobileNavLink"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div
              className="mobileTagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <span>Create</span>
              <span className="mobileTaglineDot" />
              <span>Explore</span>
              <span className="mobileTaglineDot" />
              <span>Understand</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
