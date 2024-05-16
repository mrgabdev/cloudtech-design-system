'use client'

import styles from './styles.module.scss'

interface Props {
  primary?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  label: string
  action: () => void
}

export const Button = ({ primary = true, type = 'submit', label, action }: Props) => {
  const btnStyle = primary ? styles['btn--primary'] : styles['btn--secondary']

  return (
    <button type={type} onClick={action} className={`${styles.btn} ${btnStyle}`}>
      {label}
    </button>
  )
}
