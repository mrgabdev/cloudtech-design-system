'use client'

import { Heading } from '@/atoms/heading/Heading'
import '../index.scss'
import { Button } from '@/atoms/Button/Button'
import { PopUp } from '@/molecules/pop-up/PopUp'
import { useState } from 'react'

// TODO: Remove components
export default function Home() {
  const [open, setOpen] = useState(false)

  const hello = () => {
    console.log('Enviando datos al servidor')
    setOpen(false)
  }

  const openModal = () => {
    setOpen((prev) => !prev)
  }

  return (
    <main>
      {/* <Heading tag='h1'>some text</Heading> */}
      <Button action={openModal}>Enviar datos</Button>
      {open ? (
        <PopUp
          title='Modificar datos'
          message='Se van a modificar los datos, estas seguro?'
          button={<Button action={hello}>modificar</Button>}
        />
      ) : null}
    </main>
  )
}
