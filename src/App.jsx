import { useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navbar } from './Component/Navbar'
import { Home } from './Component/Home'
import { Splash } from './Component/Splash'
import { useThemeStore } from './Zu-Store/Store'

gsap.registerPlugin(ScrollTrigger)

function App () {
  const progressRef = useRef(null)
  const ready = useThemeStore((s) => s.ready)
  const setReady = useThemeStore((s) => s.setReady)

  useEffect(() => {
    const lenis = new Lenis()
    function raf (time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const bar = progressRef.current
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      gsap.to(bar, { width: `${pct}%`, duration: 0.3, ease: 'power2.out' })
    }

    window.addEventListener('scroll', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      {!ready && <Splash onDone={setReady} />}
      <div ref={progressRef} className='progress-bar' />
      <div
        className='relative'
        style={{
          backgroundColor: 'var(--bg)',
          backgroundImage: "url('/100-90-5-monochrome.png')",
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'multiply',
          color: 'var(--text)'
        }}
      >
        <Navbar />
        <div className='z-10 h-fit p-[128px_20px_20px_240px] max-md:px-4 max-md:pt-20'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
