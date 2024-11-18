import { ReactNode } from 'react'
import style from './Heading.module.scss'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'legend'

interface Props {
  tag?: HeadingTag
  children: ReactNode | string
}

export const Heading = ({ tag = 'h1', children: title }: Props) => {
  const TitleAs = tag

  return <TitleAs className={`${style.heading} ${style[tag]}`}>{title}</TitleAs>
}
