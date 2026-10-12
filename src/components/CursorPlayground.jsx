import { useEffect, useState } from 'react'

// Glow mengikuti pointer hanya pada perangkat dengan mouse; tidak aktif untuk touch/reduced-motion.
export default function CursorPlayground() {
  const [point, setPoint] = useState({ x: -300, y: -300 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(finePointer && !reducedMotion)
    if (!finePointer || reducedMotion) return
    const move = (event) => setPoint({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  if (!enabled) return null
  return <div className="cursor-glow" style={{ '--cursor-x': `${point.x}px`, '--cursor-y': `${point.y}px` }} aria-hidden="true" />
}
