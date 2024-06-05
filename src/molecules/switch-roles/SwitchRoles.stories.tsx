import type { Meta, StoryObj } from '@storybook/react'
import { SwitchRoles } from './SwitchRoles'
import { useState } from 'react'

const meta: Meta<typeof SwitchRoles> = {
  title: 'Molecules/SwitchRoles',
  component: SwitchRoles,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof SwitchRoles>

enum Roles {
  Aspirante = 'Aspirante',
  Estudiante = 'Estudiante',
  Maestro = 'Maestro'
}

export const Default = () => {
  const [currentRole, setCurrentRole] = useState<Roles>(Roles.Aspirante)

  const toggleRole = (role: Roles): void => {
    setCurrentRole(role)
  }

  return <SwitchRoles currentRole={currentRole} toggleRole={toggleRole} />
}
