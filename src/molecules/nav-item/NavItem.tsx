'use client'

import { SubMenu } from '../../atoms/sub-menu/SubMenu'
import style from './NavItem.module.scss'
import { Placeholder, ChevronDown } from './icon'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  title: string
  children?: React.ReactElement<typeof SubMenu>[]
  startIcon?: React.ReactNode
  active?: boolean
  url?: string
  extended?: boolean
  onClick: () => void
}

export const NavItem = ({
  title,
  children,
  startIcon = <Placeholder />,
  active = false,
  url,
  extended,
  onClick
}: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const router = useRouter()
  const handleOpen = () => {
    onClick()
    setOpen((prev) => !prev)

    if (url && !children) {
      router.push(url)
    }
  }

  return (
    <li className={style.navlist}>
      <div
        className={`${style.navitem} ${active && style['navitem--active']} ${!extended && style['navlist--hiden']}`}
        onClick={handleOpen}
        onFocus={onClick}
      >
        <div className={style.navitem__icon}>{startIcon}</div>
        {extended && <p className={style.navitem__text}>{title}</p>}
        {extended && children && (
          <div className={`${style.navitem__chevron} ${open && style['navitem__chevron--active']}`}>
            <ChevronDown />
          </div>
        )}
      </div>

      {extended && open && <ul className={style.submenu}>{children}</ul>}
    </li>
  )
}
