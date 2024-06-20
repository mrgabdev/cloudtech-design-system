import type { Meta, StoryObj } from '@storybook/react'
import { NavItem } from './NavItem'
import { HomeFilled, HomeOutline } from '@/icons/home'
import { useState } from 'react'
import { SubMenu } from '@/atoms/sub-menu/SubMenu'

const meta: Meta<typeof NavItem> = {
  title: 'Molecules/NavItem',
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
    title: 'Home',
    children: [],
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
  const [current, setCurrent] = useState<number>(-1)

  const toggleActive = (id: number) => {
    setCurrent(id)
  }

  return (
    <div style={{ width: '300px' }}>
      <NavItem
        title='Home'
        active={current === 0}
        startIcon={current === 0 ? <HomeFilled /> : <HomeOutline />}
        onClick={() => toggleActive(0)}
      >
        <SubMenu
          active={current === 1}
          url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          onClick={() => toggleActive(1)}
        >
          Youtube
        </SubMenu>
        <SubMenu active={current === 2} url='https://google.com' onClick={() => toggleActive(2)}>
          Google
        </SubMenu>
        <SubMenu active={current === 3} url='https://chatgpt.com/' onClick={() => toggleActive(3)}>
          OpenAi
        </SubMenu>
      </NavItem>
    </div>
  )
}
