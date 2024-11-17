import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge } from './StatusBadge'

const meta: Meta<typeof StatusBadge> = {
  title: 'Atoms/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof StatusBadge>

export const Pending: Story = {
  args: {
    status: 'pending'
  }
}

export const Done: Story = {
  args: {
    status: 'done'
  }
}

export const UnderReview: Story = {
  args: {
    status: 'reviewing'
  }
}
