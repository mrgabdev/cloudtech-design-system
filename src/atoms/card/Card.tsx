import style from './Card.module.scss'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: Props) => {
  return <section className={`${style.card} ${className}`}>{children}</section>
}
