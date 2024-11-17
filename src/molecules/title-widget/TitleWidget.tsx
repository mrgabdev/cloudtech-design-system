import style from './TitleWidget.module.scss'

interface Props {
  widget: 1 | 2 | 3 | 4 | 5
  children: React.ReactNode
}

export const TitleWidget = ({ widget = 1, children }: Props) => {
  return (
    <header className={style['title__header']}>
      {children}
      <div className={`${style.title__widget} ${style[`title__widget--${widget}`]}`}></div>
    </header>
  )
}
