import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { JSX, useState } from 'react'

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Card>

export const Base: Story = {
  args: {
    children: 'Hello world'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    )
  ]
}
