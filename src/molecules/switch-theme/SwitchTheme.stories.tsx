import type { Meta, StoryObj } from '@storybook/react'
import { SwitchTheme } from './SwitchTheme'

const meta: Meta<typeof SwitchTheme> = {
  title: 'Molecules/SwitchTheme',
  component: SwitchTheme,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof SwitchTheme>

export const ToggleTheme: Story = {}
