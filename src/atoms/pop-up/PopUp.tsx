import { Button } from '../Button/Button'
import styles from './styles.module.css'

export const PopUp = () => {
  return (
    <div className={styles.modal}>
      <header className={styles.modal__header}>
        <div className={styles.modal__title_container}>
          <span className={styles.modal__title_tag} />
          <p className={styles.modal__title}>Actualización de datos</p>
        </div>
        <span className={styles.modal__exit}>x</span>
      </header>
      <span className={styles.modal__divider} />
      <p className={styles.modal__text}>
        ¿Estás seguro de que quieres actualizar tu perfil con la nueva información? Revisa todos los
        datos ingresados y, si estás listo, haz clic en &apos;Confirmar&apos; para proceder con la
        actualización.
      </p>
      <Button primary label='Confirmar cambios' />
    </div>
  )
}
