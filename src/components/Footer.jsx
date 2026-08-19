import { FOOTER_LINKS } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-deep-navy w-full py-stack-lg">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-stack-md">
        <div className="font-headline-md text-headline-md text-clinical-white">Dr. Martín Díaz</div>

        <nav className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="font-body-md text-body-md text-outline-variant hover:text-clinical-white transition-colors opacity-80 hover:opacity-100 hover:underline"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="font-body-md text-body-md text-outline-variant text-center md:text-right">
          © {new Date().getFullYear()} Dr. Martín Díaz Plastic Surgery. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
