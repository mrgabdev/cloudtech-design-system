'use client'
import { useEffect, useRef, useState } from 'react'
import style from './TabSelect.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Option {
  label: string
  path: string
}

interface Props {
  options: Option[]
}

export const TabSelect = ({ options = [] }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleSelect = () => {
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
        {options.find((option) => option.path === pathname)?.label}
        <span className={style.arrow}>&#9660;</span>
      </div>
      {isOpen && (
        <ul className={style.options}>
          {options.map((option) => (
            <Link
              href={option.path}
              key={option.path}
              className={style.option}
              onClick={handleSelect}
            >
              {option.label}
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}
