'use client'

import { SwitchPill } from '@/atoms'
import { BriefCaseFilled, BriefCaseOutline } from '@/icons/briefcase'
import { CoffeFilled, CoffeOutline } from '@/icons/coffee'
import { ProfileCircledFilled, ProfileCircledOutline } from '@/icons/profile_circled'
import { SwitchContainer } from '@/objects'

enum Roles {
  Aspirante = 'Aspirante',
  Estudiante = 'Estudiante',
  Maestro = 'Maestro'
}

const ROLES = [
  {
    role: Roles.Aspirante,
    icon: <ProfileCircledOutline />,
    activeIcon: <ProfileCircledFilled />
  },
  {
    role: Roles.Estudiante,
    icon: <BriefCaseOutline />,
    activeIcon: <BriefCaseFilled />
  },
  {
    role: Roles.Maestro,
    icon: <CoffeOutline />,
    activeIcon: <CoffeFilled />
  }
]

interface Props {
  currentRole: Roles
  toggleRole: (role: Roles) => void
}

export const SwitchRoles = ({ currentRole, toggleRole }: Props) => {
  return (
    <SwitchContainer>
      {ROLES.map(({ role, icon, activeIcon }) => (
        <SwitchPill
          key={role}
          active={currentRole === role}
          onClick={() => toggleRole(role)}
          icon={currentRole === role ? activeIcon : icon}
        >
          {role}
        </SwitchPill>
      ))}
    </SwitchContainer>
  )
}
