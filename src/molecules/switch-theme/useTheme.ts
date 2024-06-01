'use client'

import { useEffect, useState } from 'react'

enum Theme {
  light = 'light-theme',
  dark = 'dark-theme'
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light)

  useEffect(() => {
    const localTheme: Theme = JSON.parse(localStorage.getItem('theme') || '""')

    if (localTheme) {
      document.documentElement.className = localTheme
      setTheme(localTheme)
      return
    }

    const hasDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

    if (!hasDarkMode) {
      return
    }

    setTheme(Theme.dark)
    document.documentElement.className = Theme.dark
    return
  }, [])

  const isDark = theme === Theme.dark
  const isLight = theme === Theme.light

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    document.documentElement.className = newTheme
    localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  return {
    isDark,
    isLight,
    toggleTheme,
    Theme
  }
}
