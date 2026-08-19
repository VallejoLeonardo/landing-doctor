import { useState } from 'react'
import Icon from './Icon'
import { CONTACT_INFO } from '../data/content'

const FIELD_CLASS =
  'w-full px-4 py-3 rounded-lg border border-outline-variant bg-clinical-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Sin backend todavía: se valida y se muestra confirmación en pantalla.
  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop bg-clinical-white">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">
            Información de Contacto
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Déjanos tus consultas o agenda tu cita pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter bg-surface rounded-2xl border border-surface-variant ambient-shadow overflow-hidden">
          <div className="p-8 md:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md text-deep-navy mb-2" htmlFor="nombre">
                    Nombre
                  </label>
                  <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" className={FIELD_CLASS} />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-deep-navy mb-2" htmlFor="telefono">
                    Teléfono
                  </label>
                  <input id="telefono" name="telefono" type="tel" required placeholder="+123 456 7890" className={FIELD_CLASS} />
                </div>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-deep-navy mb-2" htmlFor="email">
                  Email
                </label>
                <input id="email" name="email" type="email" placeholder="hola@ejemplo.com" className={FIELD_CLASS} />
              </div>

              <div>
                <label className="block font-label-md text-label-md text-deep-navy mb-2" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  placeholder="Me gustaría saber más sobre..."
                  className={`${FIELD_CLASS} resize-none`}
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="rounded border-outline-variant text-primary focus:ring-primary"
                />
                <label className="font-caption text-caption text-on-surface-variant" htmlFor="terms">
                  Acepto los Términos y Condiciones
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg hover:bg-surface-tint transition-all shadow-md"
              >
                Agendar Cita
              </button>

              {sent && (
                <p role="status" className="font-label-md text-label-md text-primary text-center">
                  ¡Gracias! Hemos recibido tus datos y te contactaremos pronto.
                </p>
              )}
            </form>
          </div>

          <div className="bg-soft-blue-bg p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-8 mb-8">
              {CONTACT_INFO.map(({ icon, title, lines }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-clinical-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Icon name={icon} />
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-deep-navy font-bold mb-1">{title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {lines.map((l, i) => (
                        <span key={l}>
                          {l}
                          {i < lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-48 w-full rounded-xl overflow-hidden shadow-inner bg-surface-variant relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant">
                <Icon name="map" className="text-4xl mb-2" />
                <span className="font-label-md text-label-md">Ver en Mapa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
