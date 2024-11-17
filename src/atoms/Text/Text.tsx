import style from './Text.module.scss'

interface Props {
  children: React.ReactNode
  variant?:
    | 'base'
    | 'base-bold'
    | 'base-2'
    | 'body-medium'
    | 'body-semi'
    | 'body-2'
    | 'caption'
    | 'caption-medium'
    | 'caption-2'
    | 'caption-2-medium'
}

export const Text = ({ children, variant = 'base' }: Props) => {
  return <p className={style[variant]}>{children}</p>
}
