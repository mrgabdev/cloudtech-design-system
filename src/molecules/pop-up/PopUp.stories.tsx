import type { Meta, StoryObj } from '@storybook/react'
import { PopUp } from './PopUp'
import { Button } from '../../atoms/button/Button'

const meta = {
  title: 'Molecules/Pop-Up',
  component: PopUp,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PopUp>

export default meta
type Story = StoryObj<typeof meta>

export const Update: Story = {
  args: {
    title: 'Actualización de datos',
    message:
      '¿Estás seguro de que quieres actualizar tu perfil con la nueva información? Revisa todos los datos ingresados y, si estás listo, haz clic en &apos;Confirmar&apos; para proceder con la actualización.',
    button: (
      <Button primary action={() => alert('Datos enviados')}>
        Confirmar cambios
      </Button>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div className='light-theme'>
          <Story />
        </div>
        <div className='dark-theme'>
          <Story />
        </div>
      </div>
    )
  ]
}
