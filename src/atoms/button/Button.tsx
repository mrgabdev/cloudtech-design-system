'use client'

import styles from './styles.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  children: React.ReactNode
  endIcon?: React.ReactNode
  className?: string
}

export const Button = ({
  primary,
  type = 'button',
  children,
  onClick,
  endIcon,
  className = '',
  disabled = false
}: Props) => {
  const btnStyle = primary ? styles['btn--primary'] : styles['btn--secondary']

  const isDisabled = disabled && styles['btn--disabled']

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${btnStyle} ${isDisabled} ${className}`}
    >
      {children}
      {endIcon}
    </button>
  )
}
