'use client'

import { Button } from '@/atoms/Button/Button'
import { Heading } from '@/atoms/heading/Heading'
import { SwitchRoles } from '@/molecules/switch-roles/SwitchRoles'
import { useState } from 'react'

enum Roles {
  Aspirante = 'Aspirante',
  Estudiante = 'Estudiante',
  Maestro = 'Maestro'
}

export default function Home() {
  const [currentRole, setCurrentRole] = useState<Roles>(Roles.Aspirante)

  const toggleRole = (role: Roles): void => {
    setCurrentRole(role)
  }

  return (
    <div style={{ padding: '39.9px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Heading tag='h1'>Iniciar sesion</Heading>

      <SwitchRoles currentRole={currentRole} toggleRole={toggleRole} />

      <input type='text' placeholder='CURP' />
      <input type='text' placeholder='Clave de acceso' />

      <Button primary action={() => {}}>
        Continuar
      </Button>
      <p>This site is protected by reCAPTCHA and the Google Privacy Policy.</p>
    </div>
  )
}
