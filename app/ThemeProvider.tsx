'use client'

import { useEffect } from 'react'

type Theme = 'system' | 'light' | 'dark'

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  const stored = localStorage.getItem('theme') as Theme | null
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  return 'system'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'system') {
    const isDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    root.dataset.theme = isDark ? 'dark' : 'light'
  } else {
    root.dataset.theme = theme
  }
}

export default function ThemeProvider() {
  useEffect(() => {
    applyTheme(getStoredTheme())

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (getStoredTheme() === 'system') applyTheme('system')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return null
}