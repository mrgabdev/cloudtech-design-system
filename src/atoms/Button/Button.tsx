'use client'

import styles from './styles.module.scss'

interface Props {
  primary?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  children: React.ReactNode
  action: () => void
  disabled?: boolean
  endIcon?: React.ReactNode
}

export const Button = ({
  primary,
  type = 'submit',
  children,
  action,
  endIcon,
  disabled = false
}: Props) => {
  const btnStyle = primary ? styles['btn--primary'] : styles['btn--secondary']

  const isDisabled = disabled && styles['btn--disabled']

  return (
    <button type={type} onClick={action} className={`${styles.btn} ${btnStyle} ${isDisabled}`}>
      {children}
      {endIcon}
    </button>
  )
}
