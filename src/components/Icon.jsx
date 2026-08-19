/** Material Symbols Outlined. `fill` rellena el glifo; `size` va en px. */
export default function Icon({ name, className = '', size, fill = false, style }) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`}
      style={{
        ...(size ? { fontSize: `${size}px` } : null),
        ...(fill ? { fontVariationSettings: "'FILL' 1" } : null),
        ...style,
      }}
    >
      {name}
    </span>
  )
}
