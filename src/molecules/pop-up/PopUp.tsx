import styles from './styles.module.scss'

interface Props {
  title: string
  message: string
  button: React.ReactNode
}

export const PopUp = ({ title, message, button }: Props) => {
  return (
    <div className={styles.modal}>
      <header className={styles.modal__header}>
        <div className={styles.modal__title_container}>
          <span className={styles.modal__title_tag} />
          <p className={styles.modal__title}>{title}</p>
        </div>
        <span className={styles.modal__exit}>x</span>
      </header>
      <span className={styles.modal__divider} />
      <p className={styles.modal__text}>{message}</p>
      <div className={styles.modal__btn}>{button}</div>
    </div>
  )
}
