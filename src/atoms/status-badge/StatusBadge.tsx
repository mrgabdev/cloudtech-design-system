import style from './StatusBadge.module.scss'

interface Props {
  status: string
}

const STATUS = {
  pendiente: {
    label: 'pendiente',
    style: style['status--pending']
  },
  finalizado: { label: 'finalizado', style: style['status--done'] },
  'en revision': {
    label: 'en revision',
    style: style['status--reviewing']
  }
}

export const StatusBadge = ({ status = 'pending' }: Props) => {
  return (
    <div className={`${style.status} ${STATUS[status as keyof typeof STATUS].style}`}>
      <p>{STATUS[status as keyof typeof STATUS].label}</p>
    </div>
  )
}
