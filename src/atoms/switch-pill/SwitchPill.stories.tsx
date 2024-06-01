import type { Meta, StoryObj } from '@storybook/react'
import { SwitchPill } from './SwitchPill'
import { ProfileCircledFilled, ProfileCircledOutline } from '@/icons/profile_circled'
import { StoryBookDark, StoryBookLight } from '@/objects/StoryBookTheme'

const meta: Meta<typeof SwitchPill> = {
  title: 'Atoms/SwitchPill',
  component: SwitchPill,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof SwitchPill>

export const Neutral: Story = {
  args: {
    children: 'Aspirante',
    icon: <ProfileCircledOutline />
  },
  decorators: [
    (Story) => (
      <div>
        <StoryBookLight>
          <Story />
        </StoryBookLight>
        <StoryBookDark>
          <Story />
        </StoryBookDark>
      </div>
    )
  ]
}

export const Active: Story = {
  args: {
    children: 'Aspirante',
    icon: <ProfileCircledFilled />,
    active: true
  },
  decorators: [
    (Story) => (
      <div>
        <StoryBookLight>
          <Story />
        </StoryBookLight>
        <StoryBookDark>
          <Story />
        </StoryBookDark>
      </div>
    )
  ]
}
