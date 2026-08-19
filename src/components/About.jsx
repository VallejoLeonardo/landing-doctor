import Icon from './Icon'

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-margin-mobile md:px-margin-desktop bg-soft-blue-bg relative overflow-hidden"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-4 bg-primary-fixed-dim/30 rounded-2xl blur-xl" />
          <img
            alt="Retrato del Dr. Martín Díaz en su consultorio"
            className="relative z-10 w-full max-w-md mx-auto rounded-2xl ambient-shadow object-cover aspect-square"
            src="/img/dr-martin-diaz.png"
            loading="lazy"
            width="720"
            height="719"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-6">
            Acerca del Dr. Martín Díaz
          </h2>
          <h3 className="font-body-lg text-body-lg text-primary mb-6 font-medium">
            Cuidado Quirúrgico Avanzado con un Toque Personal.
          </h3>

          <div className="space-y-6 text-on-surface-variant font-body-md text-body-md">
            <blockquote className="pl-4 border-l-4 border-primary">
              “Su enfoque combina técnicas quirúrgicas modernas con un cuidado compasivo del
              paciente, asegurando seguridad, una recuperación más rápida y resultados duraderos.”
            </blockquote>
            <p>
              Con más de 15 años de experiencia quirúrgica, el Dr. Martín Díaz se especializa en
              Cirugía Plástica, Estética y Reconstructiva. Su compromiso con la excelencia y la
              atención al detalle lo han convertido en un referente en su campo, priorizando siempre
              la salud y los objetivos estéticos de cada paciente.
            </p>
          </div>

          <div className="mt-8">
            <a
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md py-3 px-8 rounded-full hover:bg-surface-tint transition-all shadow-md"
              href="#contact"
            >
              Conoce Más <Icon name="arrow_forward" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
