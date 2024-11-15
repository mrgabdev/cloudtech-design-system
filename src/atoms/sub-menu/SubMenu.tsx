'use client'

import Link from 'next/link'
import { StartTree, EndTree, RightChevron } from './icon'
import style from './SubMenu.module.scss'

interface Props {
  label: string
  url: string
  active: boolean
  onClick: () => void
}

export const SubMenu = ({ label, url, active = false, onClick }: Props) => {
  return (
    <li className={style.submenu}>
      <div className={style.submenu__tree}>
        <StartTree className={style['submenu__tree--start']} />
        <EndTree className={style['submenu__tree--end']} />
      </div>
      <Link
        onClick={onClick}
        onFocus={onClick}
        href={url}
        className={`${style.submenu__item} ${active && style['submenu__item--active']}`}
      >
        {label}
        {active && <RightChevron />}
      </Link>
    </li>
  )
}
