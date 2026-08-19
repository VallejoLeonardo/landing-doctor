import { useState } from 'react'
import Icon from './Icon'
import { NAV_LINKS } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-clinical-white/80 backdrop-blur-md shadow-sm shadow-primary/5 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <a href="#home" className="font-headline-md text-headline-md font-bold text-deep-navy">
          Dr. Martín Díaz
        </a>

        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className={
                i === 0
                  ? 'font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1 transition-colors'
                  : 'font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors'
              }
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md py-2 px-6 rounded-full hover:bg-surface-tint transition-all shadow-md shadow-primary/20 active:scale-95"
          href="#contact"
        >
          Book Consultation
        </a>

        <button
          type="button"
          className="md:hidden text-deep-navy"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-surface-variant bg-clinical-white px-margin-mobile py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-full"
          >
            Book Consultation
          </a>
        </nav>
      )}
    </header>
  )
}
