'use client'
import { useState } from 'react'
import style from './FieldSelect.module.scss'

interface Option {
  value: string
  label: string
}

interface Props {
  options: Option[]
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<any>) => void
  name: string
}

export const FieldSelect = ({
  options = [],
  placeholder = 'Selecciona una opción',
  value,
  onChange,
  name
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option: Option) => {
    const event = {
      target: {
        name,
        value: option.value
      }
    } as React.ChangeEvent<any>
    onChange(event)
    setIsOpen(false)
  }

  return (
    <div className={style.selectContainer}>
      <div className={style.selected} onClick={() => setIsOpen(!isOpen)}>
        {options.find((option) => option.value === value)?.label || placeholder}
        <span className={style.arrow}>&#9660;</span>
      </div>
      {isOpen && (
        <div className={style.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={style.option}
              onClick={() => handleSelect(option)} // Seleccionamos la opción
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
