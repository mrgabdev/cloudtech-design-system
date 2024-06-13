import type { Meta, StoryObj } from '@storybook/react'
import { NavItem } from './NavItem'
import { HomeFilled, HomeOutline } from '@/icons/home'

const meta: Meta<typeof NavItem> = {
  title: 'Atoms/NavItem',
  component: NavItem,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof NavItem>

export const Base: Story = {
  args: {
    children: 'Home',
    startIcon: <HomeOutline />
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    )
  ]
}

export const Active: Story = {
  args: {
    active: true,
    children: 'Home',
    startIcon: <HomeFilled />
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    )
  ]
}
