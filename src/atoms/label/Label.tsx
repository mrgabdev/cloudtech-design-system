import styles from './Label.module.scss'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export const Label = ({ children, ...props }: Props) => {
  return (
    <label className={styles.label} {...props}>
      {children}
    </label>
  )
}
