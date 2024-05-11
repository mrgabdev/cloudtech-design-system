import type { Meta, StoryObj } from '@storybook/react'
import { PopUp } from './PopUp'

const meta = {
  title: 'Componentes/Pop-Up',
  component: PopUp,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof PopUp>

export default meta
type Story = StoryObj<typeof meta>

export const Update: Story = {}
