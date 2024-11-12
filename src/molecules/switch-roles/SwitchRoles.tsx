'use client'

import { SwitchPill } from '../../atoms'
import { BriefCaseFilled, BriefCaseOutline } from '../../icons/briefcase'
import { CoffeFilled, CoffeOutline } from '../../icons/coffee'
import { ProfileCircledFilled, ProfileCircledOutline } from '../../icons/profile_circled'
import { SwitchContainer } from '../../objects'
import styles from './SwitchRoles.module.scss'

enum Roles {
  Applicant = 'Aspirante',
  Student = 'Estudiante',
  Teacher = 'Maestro'
}

const ROLES = [
  {
    role: Roles.Applicant,
    icon: <ProfileCircledOutline />,
    activeIcon: <ProfileCircledFilled />
  },
  {
    role: Roles.Student,
    icon: <BriefCaseOutline />,
    activeIcon: <BriefCaseFilled />
  },
  {
    role: Roles.Teacher,
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
          className={styles['pill-rol']}
        >
          {role}
        </SwitchPill>
      ))}
    </SwitchContainer>
  )
}
