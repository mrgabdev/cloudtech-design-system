import styles from './Container.module.scss'

interface Props {
  children: React.ReactNode
  tag?: 'div' | 'section'
  ariaLabel?: string
}

export const Container = ({ tag = 'div', ariaLabel, children }: Props) => {
  const Tag = tag

  return (
    <Tag aria-label={ariaLabel} className={styles.container}>
      {children}
    </Tag>
  )
}
