'use client'

import style from './NavItem.module.scss'
import { Placeholder, ChevronDown } from './icon'

interface Props {
  children: React.ReactNode
  startIcon?: React.ReactNode
  active?: boolean
  onClick: () => void
}

export const NavItem = ({
  children,
  active = false,
  startIcon = <Placeholder />,
  onClick
}: Props) => {
  return (
    <li className={`${style.navitem} ${active && style['navitem--active']}`} onClick={onClick}>
      <div className={style.navitem__icon}>{startIcon}</div>
      <p className={style.navitem__text}>{children}</p>
      <div className={`${style.navitem__chevron} ${style['navitem__chevron--active']}`}>
        <ChevronDown />
      </div>
    </li>
  )
}
