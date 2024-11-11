'use client'
import { HideEyeOutline, LockOutfilled, ShowEyeOutline } from '../../icons'
import styles from './InputField.module.scss'
import { InputHTMLAttributes, useState } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode
}

export const InputField = ({ ...props }: Props) => {
  return (
    <InputWrapper>
      {props.type === 'password' ? <PasswordInput {...props} /> : <InputDefault {...props} />}
    </InputWrapper>
  )
}

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles['input-container']}>{children}</div>
}

const InputDefault: typeof InputField = ({ type = 'text', iconLeft, ...props }) => {
  return (
    <>
      {iconLeft && <span className={styles.input__icon}>{iconLeft}</span>}
      <input type={type} {...props} className={styles.input} />
    </>
  )
}

const PasswordInput: typeof InputField = ({ ...props }) => {
  const [visibility, setVisibility] = useState<Boolean>(false)

  const toggleVisibility = () => setVisibility((prev) => !prev)

  return (
    <>
      <span className={styles.input__icon}>{<LockOutfilled />}</span>
      <input {...props} type={visibility ? 'text' : 'password'} className={styles.input} />
      {props.value !== undefined && props.value !== '' && (
        <span className={styles.input__reveal} onClick={toggleVisibility}>
          {visibility ? <HideEyeOutline /> : <ShowEyeOutline />}
        </span>
      )}
    </>
  )
}
