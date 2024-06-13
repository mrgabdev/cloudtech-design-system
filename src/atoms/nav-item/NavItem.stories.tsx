import type { Meta, StoryObj } from '@storybook/react'
import { NavItem } from './NavItem'
import { HomeFilled, HomeOutline } from '@/icons/home'
import { useState } from 'react'

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

export const Interactive = () => {
  const [active, setActive] = useState<boolean>(false)

  const toggleActive = () => {
    setActive((prev) => !prev)
  }

  return (
    <div style={{ width: '300px' }}>
      <NavItem
        active={active}
        startIcon={active ? <HomeFilled /> : <HomeOutline />}
        onClick={toggleActive}
      >
        Home
      </NavItem>
    </div>
  )
}
