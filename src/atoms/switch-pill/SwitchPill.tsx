'use client'

import style from './SwitchPill.module.scss'

interface Props {
  active?: boolean
  children?: React.ReactNode
  icon?: React.ReactNode
  onClick?: () => any
  className?: string
}

export const SwitchPill = ({
  active = false,
  children,
  icon,
  onClick = () => {},
  className = ''
}: Props) => {
  return (
    <div
      className={`${style.switch} ${active && style['switch--active']} ${className}`}
      onClick={onClick}
    >
      <div className={style['switch-item']}>
        <div className={style['switch-icon']}>{icon ? icon : null}</div>
        {children && <p className={style['switch-item__text']}>{children}</p>}
      </div>
    </div>
  )
}
