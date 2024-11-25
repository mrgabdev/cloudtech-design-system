'use client'
import { useEffect, useRef, useState } from 'react'
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
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={style.selectContainer} ref={dropdownRef}>
      <div className={style.selected} onClick={() => setIsOpen(!isOpen)}>
        {options.find((option) => option.value.toLowerCase() == value.toLowerCase())?.label ||
          placeholder}
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
