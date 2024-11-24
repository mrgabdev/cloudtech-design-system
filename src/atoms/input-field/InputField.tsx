'use client'
import { HideEyeOutline, LockOutfilled, ShowEyeOutline } from '../../icons'
import styles from './InputField.module.scss'
import { useState } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode
}

const factoryInput = {
  password: (props: Props) => <PasswordInput {...props} />,
  default: ({ iconLeft, ...props }: Props) => <InputDefault iconLeft={iconLeft} {...props} />
}

export const InputField = ({ ...props }: Props) => {
  const FieldComponent =
    factoryInput[props.type as keyof typeof factoryInput] || factoryInput.default

  return (
    <InputWrapper>
      <FieldComponent {...props} />
    </InputWrapper>
  )
}

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles['input-container']}>{children}</div>
}

const InputDefault = ({ type = 'text', iconLeft, ...props }: Props) => {
  return (
    <>
      {iconLeft && <span className={styles.input__icon}>{iconLeft}</span>}
      <input type={type} {...props} className={styles.input} />
    </>
  )
}

const PasswordInput = ({ iconLeft = <LockOutfilled />, ...props }: Props) => {
  const [visibility, setVisibility] = useState<boolean>(false)

  const toggleVisibility = () => setVisibility((prev) => !prev)

  return (
    <>
      <span className={styles.input__icon}>{iconLeft}</span>
      <input {...props} type={visibility ? 'text' : 'password'} className={styles.input} />
      {props.value !== undefined && props.value !== '' && (
        <span className={styles.input__reveal} onClick={toggleVisibility}>
          {visibility ? <HideEyeOutline /> : <ShowEyeOutline />}
        </span>
      )}
    </>
  )
}
