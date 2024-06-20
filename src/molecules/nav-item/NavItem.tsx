'use client'

import { SubMenu } from '@/atoms/sub-menu/SubMenu'
import style from './NavItem.module.scss'
import { Placeholder, ChevronDown } from './icon'
import { useState } from 'react'

interface Props {
  title: string
  children: React.ReactElement<typeof SubMenu>[]
  startIcon?: React.ReactNode
  active?: boolean
  onClick: () => void
}

export const NavItem = ({
  title,
  children,
  active = false,
  startIcon = <Placeholder />,
  onClick
}: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    onClick()
    setOpen((prev) => !prev)
  }

  return (
    <li className={style.navlist}>
      <div
        className={`${style.navitem} ${active && style['navitem--active']}`}
        onClick={handleOpen}
        onFocus={onClick}
      >
        <div className={style.navitem__icon}>{startIcon}</div>
        <p className={style.navitem__text}>{title}</p>
        <div className={`${style.navitem__chevron} ${open && style['navitem__chevron--active']}`}>
          <ChevronDown />
        </div>
      </div>

      {open && <ul className={style.submenu}>{children}</ul>}
    </li>
  )
}
