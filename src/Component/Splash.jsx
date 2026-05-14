import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const NN = 'Aditya Holkar'

export const Splash = ({ onDone }) => {
  const el = useRef(null)
  const a = useRef(null)
  const h = useRef(null)
  const nc = useRef([])
  const c = useRef(null)

  useEffect(() => {
    const o = { v: 0 }
    const tl = gsap.timeline({ onComplete: () => onDone?.() })
    tl.fromTo(el.current, { autoAlpha: 1 }, { autoAlpha: 1, duration: 0.01 })
      .fromTo(a.current, { opacity: 0, scale: 0, rotation: -25 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: 'back.out(1.7)', transformOrigin: '50% 50%' })
      .fromTo(h.current, { opacity: 0, scale: 0, rotation: 25 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: 'back.out(1.7)', transformOrigin: '50% 50%' }, '-=0.45')
      .fromTo(nc.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out' }, '-=0.25')
      .to(o, { v: 100, duration: 2.2, ease: 'power2.out', onUpdate: () => { if (c.current) c.current.textContent = String(Math.round(o.v)).padStart(2, '0') } }, '-=0.1')
      .to(el.current, { autoAlpha: 0, duration: 0.5, ease: 'power2.in' }, '+=0.4')
    return () => tl.kill()
  }, [])

  return (
    <div ref={el} className='fixed inset-0 z-[9999] flex flex-col items-center justify-center' style={{ backgroundColor: 'var(--bg)' }}>
      <svg viewBox='0 0 500 210' className='w-[30rem] overflow-visible'>
        <text ref={a} x='210' y='155' textAnchor='middle' dominantBaseline='central'
          fontFamily="'Times New Roman', serif" fontSize='90' fontWeight='bold'
          fill='var(--accent)'>A</text>
        <text ref={h} x='290' y='155' textAnchor='middle' dominantBaseline='central'
          fontFamily="'Times New Roman', serif" fontSize='90' fontWeight='bold'
          fill='var(--accent)'>H</text>
      </svg>
      <div className='flex flex-wrap justify-center gap-[0.18em]'>
        {NN.split('').map((ch, i) => (
          <span key={i} ref={el => nc.current[i] = el}
            className='text-lg font-medium'
            style={{ color: 'var(--text-muted)' }}>{ch === ' ' ? '\u00A0' : ch}</span>
        ))}
      </div>
      <p ref={c} className='absolute bottom-12 font-mono text-7xl font-black tracking-tight' style={{ color: 'var(--text)' }}>
        00
      </p>
    </div>
  )
}
