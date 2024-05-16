import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Atoms/Headings',
  component: Heading,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Heading>

export const Primary: Story = {
  args: {
    children: 'Titulo Principal',
    tag: 'h1'
  },
  decorators: [
    (Story) => (
      <div>
        <div className='light-theme story-light'>
          <Story />
        </div>
        <div className='dark-theme story-dark'>
          <Story />
        </div>
      </div>
    )
  ]
}

export const Secondary: Story = {
  args: {
    children: 'Titulo Secundario',
    tag: 'h2'
  },
  decorators: [
    (Story) => (
      <div>
        <div className='light-theme story-light'>
          <Story />
        </div>
        <div className='dark-theme story-dark'>
          <Story />
        </div>
      </div>
    )
  ]
}

export const Tertiary: Story = {
  args: {
    children: 'Titulo Terciario',
    tag: 'h3'
  },
  decorators: [
    (Story) => (
      <div>
        <div className='light-theme story-light'>
          <Story />
        </div>
        <div className='dark-theme story-dark'>
          <Story />
        </div>
      </div>
    )
  ]
}

export const Fourth: Story = {
  args: {
    children: 'Titulo Cuarto',
    tag: 'h4'
  },
  decorators: [
    (Story) => (
      <div>
        <div className='light-theme story-light'>
          <Story />
        </div>
        <div className='dark-theme story-dark'>
          <Story />
        </div>
      </div>
    )
  ]
}
