import style from './Checkpoint.module.scss'

interface Props {
  count: number
  active: boolean
}

export const Checkpoint = ({ count, active }: Props) => {
  return <div>{count}</div>
}
