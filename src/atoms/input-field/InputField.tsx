import styles from './InputField.module.scss'

interface Props {
  id?: string
  name: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  required?: boolean
  autoComplete?: string
  className?: string
  iconLeft?: React.ReactNode
}

export const InputField = ({ type = 'text', iconLeft, ...props }: Props) => {
  return (
    <div className={styles['input-container']}>
      {iconLeft && <span className={styles.input__icon}>{iconLeft}</span>}
      <input type={type} {...props} className={styles.input} />
    </div>
  )
}
