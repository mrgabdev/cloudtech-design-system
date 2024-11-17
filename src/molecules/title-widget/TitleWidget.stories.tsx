import type { Meta, StoryObj } from '@storybook/react'
import { TitleWidget } from './TitleWidget'

const meta: Meta<typeof TitleWidget> = {
  title: 'Atoms/TitleWidget',
  component: TitleWidget,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof TitleWidget>

export const Widget1: Story = {
  args: {
    children:
      'Gracias por dar el primer paso y unirte a nuestra comunidad, tu cuenta ha sido creada. Aún hay algunas tareas pendientes antes de que puedas comenzar tu primera clase con nosotros.',
    widget: 1
  }
}

export const Widget2: Story = {
  args: {
    children:
      'Gracias por dar el primer paso y unirte a nuestra comunidad, tu cuenta ha sido creada. Aún hay algunas tareas pendientes antes de que puedas comenzar tu primera clase con nosotros.',
    widget: 2
  }
}

export const Widget3: Story = {
  args: {
    children:
      'Gracias por dar el primer paso y unirte a nuestra comunidad, tu cuenta ha sido creada. Aún hay algunas tareas pendientes antes de que puedas comenzar tu primera clase con nosotros.',
    widget: 3
  }
}

export const Widget4: Story = {
  args: {
    children:
      'Gracias por dar el primer paso y unirte a nuestra comunidad, tu cuenta ha sido creada. Aún hay algunas tareas pendientes antes de que puedas comenzar tu primera clase con nosotros.',
    widget: 4
  }
}

export const Widget5: Story = {
  args: {
    children:
      'Gracias por dar el primer paso y unirte a nuestra comunidad, tu cuenta ha sido creada. Aún hay algunas tareas pendientes antes de que puedas comenzar tu primera clase con nosotros.',
    widget: 5
  }
}
