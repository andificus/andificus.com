'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import AndificusLogo from './AndificusLogo'

export default function NavBar() {
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsDark(document.documentElement.dataset.theme === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    setIsDark(next === 'dark')
  }

  return (
    <header className="navbar">
      <nav className="navbarInner">
        <Link href="/" className="brandLink" aria-label="Andificus home">
          <AndificusLogo height={42} />
        </Link>

        <div className="navbarLinks">
          <a href="#about"    className="navLink">About</a>
          <a href="#skills"   className="navLink">Skills</a>
          <a href="#projects" className="navLink">Projects</a>
          <a href="#contact"  className="navLink">Contact</a>
        </div>

        <div className="navbarRight">
          {isMounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="btn btnGhost"
              style={{ padding: '6px 10px', fontSize: 15, lineHeight: 1 }}
              aria-label="Toggle theme"
            >
              {isDark ? '☀︎' : '☽'}
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}