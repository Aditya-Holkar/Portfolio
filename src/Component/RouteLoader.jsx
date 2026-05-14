import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const RouteLoader = ({ route, onDone }) => {
  const el = useRef(null)
  const nc = useRef([])
  const c = useRef(null)

  useEffect(() => {
    const obj = { v: 0 }
    const tl = gsap.timeline({ onComplete: () => onDone?.() })
    tl.fromTo(el.current, { autoAlpha: 1 }, { autoAlpha: 1, duration: 0.01 })
      .fromTo(nc.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out' })
      .to(obj, { v: 100, duration: 1.5, ease: 'power2.out', onUpdate: () => { if (c.current) c.current.textContent = String(Math.round(obj.v)).padStart(2, '0') } }, '-=0.1')
      .to(el.current, { autoAlpha: 0, duration: 0.4, ease: 'power2.in' }, '+=0.2')
    return () => tl.kill()
  }, [])

  return (
    <div ref={el} className='fixed inset-0 z-[9999] flex flex-col items-center justify-center' style={{ backgroundColor: 'var(--bg)' }}>
      <div className='flex flex-wrap justify-center gap-[0.18em]'>
        {route.split('').map((ch, i) => (
          <span key={i} ref={el => nc.current[i] = el}
            className='text-4xl font-bold tracking-tight'
            style={{ color: 'var(--text)' }}>{ch === ' ' ? '\u00A0' : ch}</span>
        ))}
      </div>
      <p ref={c} className='absolute bottom-12 font-mono text-7xl font-black tracking-tight' style={{ color: 'var(--text)' }}>
        00
      </p>
    </div>
  )
}
