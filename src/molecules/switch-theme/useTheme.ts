'use client'

import { useEffect, useState } from 'react'

enum Theme {
  light = 'light-theme',
  dark = 'dark-theme'
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light)
  const isDark = theme === Theme.dark
  const isLight = theme === Theme.light

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

  const saveTheme = (newTheme: Theme) => {
    document.documentElement.className = newTheme
    localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  const toggleTheme = () => {
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light

    setTheme(newTheme)
    saveTheme(newTheme)
  }

  const setNewTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    saveTheme(newTheme)
  }

  return {
    isDark,
    isLight,
    setNewTheme,
    toggleTheme,
    Theme
  }
}
