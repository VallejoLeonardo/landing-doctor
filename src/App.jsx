import { useEffect } from 'react'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

const SERVICES = [
  { icon: '🪥', title: 'Limpieza dental', desc: 'Profilaxis profesional que elimina placa y sarro para mantener tus encías sanas y tu aliento fresco.' },
  { icon: '😁', title: 'Ortodoncia', desc: 'Brackets tradicionales y alineadores invisibles para conseguir una sonrisa perfectamente alineada.' },
  { icon: '✨', title: 'Blanqueamiento', desc: 'Tratamientos seguros con resultados visibles desde la primera sesión. Recupera el blanco natural.' },
  { icon: '🦷', title: 'Implantes', desc: 'Reemplazo de piezas dentales con implantes de titanio de alta calidad y apariencia natural.' },
  { icon: '🩺', title: 'Endodoncia', desc: 'Tratamiento de conducto sin dolor con tecnología rotatoria de última generación.' },
  { icon: '🧒', title: 'Odontopediatría', desc: 'Atención especializada y amigable para los más pequeños, en un ambiente sin miedo.' },
]

const FEATURES = [
  { icon: '🏆', title: '15 años de experiencia', desc: 'Un equipo de especialistas certificados con miles de pacientes satisfechos.' },
  { icon: '🔬', title: 'Tecnología de punta', desc: 'Radiografía digital, escáner intraoral 3D y esterilización de grado hospitalario.' },
  { icon: '💳', title: 'Planes de pago', desc: 'Financiamiento flexible y convenios con las principales aseguradoras.' },
  { icon: '⏰', title: 'Horarios amplios', desc: 'Abrimos de lunes a sábado, con citas de urgencia el mismo día.' },
]

const TESTIMONIALS = [
  { name: 'María González', role: 'Paciente de ortodoncia', quote: 'Después de 18 meses con alineadores, mi sonrisa cambió por completo. El seguimiento fue impecable de principio a fin.' },
  { name: 'Carlos Ramírez', role: 'Paciente de implantes', quote: 'Tenía miedo al procedimiento, pero todo fue rápido y sin dolor. Hoy como de todo otra vez y nadie nota la diferencia.' },
  { name: 'Ana Martínez', role: 'Mamá de paciente', quote: 'Mi hija de 6 años ya no llora al ir al dentista. El trato con los niños es maravilloso, se los recomiendo a todos.' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="brand">
            <img src="/tooth.svg" alt="" width="34" height="34" />
            <span>Clínica Dental <strong>Sonrisa</strong></span>
          </a>
          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <a href="#contacto" className="btn btn-primary nav-cta">Agenda tu cita</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">Odontología profesional</span>
              <h1>Tu mejor sonrisa <span className="hero-accent">empieza aquí</span></h1>
              <p className="section-lead">
                Cuidamos tu salud bucal con tecnología de vanguardia y un equipo
                que te hará sentir en casa. Limpieza, ortodoncia, blanqueamiento,
                implantes y más.
              </p>
              <div className="hero-actions">
                <a href="#contacto" className="btn btn-primary">Agenda tu cita</a>
                <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
              </div>
              <ul className="hero-stats">
                <li><strong>+8,000</strong><span>pacientes atendidos</span></li>
                <li><strong>15</strong><span>años de experiencia</span></li>
                <li><strong>4.9★</strong><span>calificación promedio</span></li>
              </ul>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-badge card">
                <span className="hero-badge-icon">🦷</span>
                <div>
                  <strong>Primera consulta</strong>
                  <span>valoración sin costo</span>
                </div>
              </div>
              <div className="hero-circle" />
            </div>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Servicios</span>
              <h2 className="section-title">Todo lo que tu sonrisa necesita</h2>
              <p className="section-lead">Tratamientos integrales para cada etapa de tu salud dental.</p>
            </div>
            <div className="grid-3">
              {SERVICES.map((s) => (
                <article key={s.title} className="card service-card reveal">
                  <span className="service-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">¿Por qué elegirnos?</span>
              <h2 className="section-title">Una clínica pensada para ti</h2>
            </div>
            <div className="grid-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="feature reveal">
                  <span className="feature-icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Testimonios</span>
              <h2 className="section-title">Lo que dicen nuestros pacientes</h2>
            </div>
            <div className="grid-3">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="card testimonial reveal">
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>¿Listo para transformar tu sonrisa?</h2>
                <p>Agenda tu valoración sin costo. Te contactamos el mismo día.</p>
              </div>
              <div className="cta-actions">
                <a href="tel:+525512345678" className="btn btn-ghost">📞 55 1234 5678</a>
                <a href="https://wa.me/525512345678" className="btn btn-primary">Agendar por WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#" className="brand">
            <img src="/tooth.svg" alt="" width="28" height="28" />
            <span>Clínica Dental <strong>Sonrisa</strong></span>
          </a>
          <p>Av. Reforma 123, Col. Centro · Lun–Sáb 9:00–19:00</p>
          <p className="footer-copy">© {new Date().getFullYear()} Clínica Dental Sonrisa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}
