import type { Meta, StoryObj } from '@storybook/react'
import { SubMenu } from './SubMenu'
import { useState } from 'react'

const meta: Meta<typeof SubMenu> = {
  title: 'Atoms/SubMenu',
  component: SubMenu,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof SubMenu>

export const Base: Story = {
  args: {
    children: 'Google',
    url: 'https://google.com',
    active: false
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    )
  ]
}

export const List = () => {
  const [current, setCurrent] = useState<number>(1)

  const handleMenu = (id: number) => {
    setCurrent(id)
  }

  return (
    <div style={{ width: '300px' }}>
      <SubMenu
        active={current === 1}
        url='https://google.com'
        onClick={() => {
          handleMenu(1)
        }}
      >
        Google
      </SubMenu>
      <SubMenu
        active={current === 2}
        url='https://youtube.com'
        onClick={() => {
          handleMenu(2)
        }}
      >
        Youtube
      </SubMenu>
    </div>
  )
}
