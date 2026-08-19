export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#results', label: 'Results' },
  { href: '#contact', label: 'Contact' },
]

export const STATS = [
  { icon: 'group', value: '5000+', label: 'Cirugías Exitosas' },
  { icon: 'star', value: '15+', label: 'Años de Experiencia' },
]

// `image` apunta a una foto real; cuando falta, la tarjeta usa un fondo de marca con icono.
export const SERVICES = [
  {
    title: 'Braquioplastia',
    subtitle: '(Lipo de Brazos)',
    image: '/img/braquioplastia.png',
    icon: 'front_hand',
  },
  {
    title: 'Cervicoplastia',
    subtitle: '(Lipo de Papada)',
    image: null,
    icon: 'face_retouching_natural',
  },
  {
    title: 'Otoplastia',
    subtitle: 'Cirugía de Orejas',
    image: null,
    icon: 'hearing',
  },
  {
    title: 'Liposucción 360',
    subtitle: 'Contorno Corporal Completo',
    image: null,
    icon: 'accessibility_new',
  },
]

export const CONTACT_INFO = [
  {
    icon: 'location_on',
    title: 'Clínica Principal',
    lines: ['Av. Principal 123, Ciudad Médica', 'Consultorio 405'],
  },
  {
    icon: 'call',
    title: 'Llámanos',
    lines: ['+52 123 456 7890'],
  },
  {
    icon: 'schedule',
    title: 'Horarios',
    lines: ['Lunes - Viernes: 9:00 AM - 6:00 PM', 'Sábados: Previa Cita'],
  },
]

export const FOOTER_LINKS = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Patient Portal' },
]
