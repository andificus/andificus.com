'use client'

import { useEffect } from 'react'

export default function ThemeProvider() {
  useEffect(() => {
    document.documentElement.dataset.theme = 'dark'
  }, [])

  return null
}
