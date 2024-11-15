'use client'

import { SwitchPill } from '../../atoms'
import { SunFilled, SunOutline } from '../../icons/sun'
import { MoonFilled, MoonOutline } from '../../icons/moon'
import { useTheme } from './useTheme'
import { SwitchContainer, SwitchContainerButton } from '../../objects'

export const SwitchTheme = () => {
  const { isDark, isLight, setNewTheme, Theme } = useTheme()

  return (
    <SwitchContainer>
      <SwitchPill
        active={isLight}
        onClick={() => setNewTheme(Theme.light)}
        icon={isLight ? <SunFilled /> : <SunOutline />}
      >
        Light
      </SwitchPill>
      <SwitchPill
        active={isDark}
        onClick={() => setNewTheme(Theme.dark)}
        icon={isDark ? <MoonFilled /> : <MoonOutline />}
      >
        Dark
      </SwitchPill>
    </SwitchContainer>
  )
}

export const SwitchThemeButton = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <SwitchContainerButton>
      <SwitchPill active onClick={toggleTheme} icon={isDark ? <MoonFilled /> : <SunFilled />} />
    </SwitchContainerButton>
  )
}
