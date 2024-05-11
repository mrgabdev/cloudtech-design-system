import styles from './styles.module.css'

interface Props {
  primary?: boolean
  backgroundColor?: string
  label: string
}

export const Button = ({ primary, backgroundColor, label }: Props) => {
  return (
    <button
      className={primary ? styles.btn__primary : styles.btn__secondary}
      style={{ backgroundColor, color: 'white' }}
    >
      {label}
    </button>
  )
}
