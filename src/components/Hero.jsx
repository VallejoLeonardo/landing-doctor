import Icon from './Icon'
import { STATS } from '../data/content'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-soft-blue-bg pt-12 pb-24 px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative z-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-clinical-white px-4 py-2 rounded-full mb-6 ambient-shadow text-primary font-label-md text-label-md">
            <Icon name="verified" className="text-lg" />
            Especialista Certificado
          </div>

          <h1 className="font-display-lg text-display-lg text-deep-navy mb-6">
            Cirugía Plástica, Estética &amp; Reconstructiva
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Brindando cuidado quirúrgico experto con precisión, seguridad y compasión. Resultados
            naturales que realzan tu confianza.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md py-3 px-8 rounded-full hover:bg-surface-tint transition-all shadow-lg shadow-primary/25"
              href="#contact"
            >
              Agendar Consulta
            </a>
            <a
              className="inline-flex items-center justify-center bg-clinical-white text-primary border border-primary-fixed-dim font-label-md text-label-md py-3 px-8 rounded-full hover:bg-soft-blue-bg transition-all"
              href="#services"
            >
              Ver Servicios
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            {STATS.map(({ icon, value, label }) => (
              <div key={label} className="glass-panel p-4 rounded-xl flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-soft-blue-bg flex items-center justify-center text-primary shrink-0">
                  <Icon name={icon} />
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-deep-navy">{value}</div>
                  <div className="font-caption text-caption text-on-surface-variant">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-fixed to-soft-blue-bg rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10" />
          <img
            alt="Dr. Martín Díaz — Cirugía Plástica, Estética y Reconstructiva"
            className="relative z-10 w-full h-auto rounded-2xl ambient-shadow object-cover"
            src="/img/hero-banner.png"
            width="960"
            height="541"
          />
          <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl z-20 hidden md:flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <Icon name="shield" />
            </div>
            <div>
              <div className="font-label-md text-label-md text-deep-navy font-bold">Certificado</div>
              <div className="font-caption text-caption text-on-surface-variant">
                Consejo de Cirugía
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
