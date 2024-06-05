import style from './Sidebar.module.scss'

interface Props {
  children: React.ReactNode
}

export const Sidebar = ({ children }: Props) => {
  return <aside className={style.sidebar}>{children}</aside>
}
