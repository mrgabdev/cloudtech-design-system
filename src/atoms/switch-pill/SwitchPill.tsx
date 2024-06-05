'use client'

import style from './SwitchPill.module.scss'

interface Props {
  active?: boolean
  children: React.ReactNode
  icon?: React.ReactNode
  onClick?: () => any
}

export const SwitchPill = ({ active = false, children, icon, onClick = () => {} }: Props) => {
  return (
    <div className={`${style.switch} ${active && style['switch--active']}`} onClick={onClick}>
      <div className={style['switch-item']}>
        <div className={style['switch-icon']}>{icon ? icon : null}</div>
        <p className={style['switch-item__text']}>{children}</p>
      </div>
    </div>
  )
}
