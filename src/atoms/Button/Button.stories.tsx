import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Boton',
    primary: true,
    action: () => {}
  }
}

export const PrimaryDisabled: Story = {
  args: {
    children: 'Boton',
    primary: true,
    disabled: true,
    action: () => {}
  }
}

export const PrimaryWithIcon: Story = {
  args: {
    children: 'Boton',
    primary: true,
    endIcon: <p>+</p>,
    action: () => {}
  }
}

export const Secondary: Story = {
  args: {
    primary: false,
    children: 'Boton',
    action: () => {}
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '0.8em' }}>
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

export const SecondaryDisabled: Story = {
  args: {
    primary: false,
    disabled: true,
    children: 'Boton',
    action: () => {}
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '0.8em' }}>
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

export const SecondaryWithIcon: Story = {
  args: {
    primary: false,
    children: 'Boton',
    endIcon: <p>+</p>,
    action: () => {}
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '0.8em' }}>
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
