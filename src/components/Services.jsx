import Icon from './Icon'
import { SERVICES } from '../data/content'

function ServiceCard({ title, subtitle, image, icon }) {
  return (
    <article className="bg-surface rounded-xl overflow-hidden border border-surface-variant ambient-shadow group hover:-translate-y-1 transition-transform duration-300">
      <div className="h-48 relative overflow-hidden">
        {image ? (
          <img
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={image}
            loading="lazy"
          />
        ) : (
          // Sin foto disponible: fondo de marca con el icono del procedimiento.
          <div className="w-full h-full bg-gradient-to-br from-soft-blue-bg via-primary-fixed to-secondary-container flex items-center justify-center">
            <Icon name={icon} size={56} className="text-primary/70" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-clinical-white/90 backdrop-blur rounded-full p-2 text-primary shadow-sm">
          <Icon name="arrow_outward" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{subtitle}</p>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-margin-mobile md:px-margin-desktop bg-clinical-white"
    >
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Mis Servicios</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Procedimientos quirúrgicos avanzados diseñados para resultados seguros, efectivos y
              naturales.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:underline shrink-0"
            href="#contact"
          >
            Ver todos los servicios <Icon name="arrow_forward" size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
