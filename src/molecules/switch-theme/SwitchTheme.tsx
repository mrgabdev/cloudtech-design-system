'use client'

import { SwitchPill } from '@/atoms'
import { SunFilled, SunOutline } from '@/icons/sun'
import { MoonFilled, MoonOutline } from '@/icons/moon'
import style from './SwitchTheme.module.scss'
import { useTheme } from './useTheme'

export const SwitchTheme = () => {
  const { isDark, isLight, toggleTheme, Theme } = useTheme()

  return (
    <div className={style['switch-container']}>
      <SwitchPill
        active={isLight}
        onClick={() => toggleTheme(Theme.light)}
        icon={isLight ? <SunFilled /> : <SunOutline />}
      >
        Light
      </SwitchPill>
      <SwitchPill
        active={isDark}
        onClick={() => toggleTheme(Theme.dark)}
        icon={isDark ? <MoonFilled /> : <MoonOutline />}
      >
        Dark
      </SwitchPill>
    </div>
  )
}
