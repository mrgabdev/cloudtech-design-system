import { ReactNode } from 'react'
import style from './Heading.module.scss'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'legend'
type Variant = 'title-1' | 'title-1-medium' | 'title-1-semi' | 'title-2'
interface Props {
  tag?: HeadingTag
  variant?: Variant
  children: ReactNode | string
}

export const Heading = ({ tag = 'h1', variant, children: title }: Props) => {
  const TitleAs = tag

  return (
    <TitleAs className={`${style.heading} ${style[tag]} ${style[variant ?? ''] ?? ''}`}>
      {title}
    </TitleAs>
  )
}
