import style from './SwitchContainer.module.scss'

interface Props {
  children: React.ReactNode
}

export const SwitchContainer = ({ children }: Props) => {
  return <div className={style['switch-container']}>{children}</div>
}

export const SwitchContainerButton = ({ children }: Props) => {
  return <div className={style['switch-container-btn']}>{children}</div>
}
