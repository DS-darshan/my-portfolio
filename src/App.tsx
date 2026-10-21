import { useEffect, type PointerEvent } from 'react'
import { MotionConfig } from 'framer-motion'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    let frame = 0
    const revealInView = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        elements.forEach((element) => {
          const bounds = element.getBoundingClientRect()
          if (bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0) {
            element.classList.add('is-visible')
          }
        })
      })
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' })

    elements.forEach((element) => observer.observe(element))
    window.addEventListener('scroll', revealInView, { passive: true })
    window.addEventListener('resize', revealInView)
    revealInView()
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', revealInView)
      window.removeEventListener('resize', revealInView)
    }
  }, [])

  const updateAmbientLight = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY}px`)
    const target = (event.target as HTMLElement).closest<HTMLElement>('.magnetic')
    if (!target) return
    const bounds = target.getBoundingClientRect()
    const pullX = (event.clientX - bounds.left - bounds.width / 2) * 0.08
    const pullY = (event.clientY - bounds.top - bounds.height / 2) * 0.08
    target.style.setProperty('--magnetic-x', `${pullX}px`)
    target.style.setProperty('--magnetic-y', `${pullY}px`)
  }

  const resetMagneticButton = (event: PointerEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>('.magnetic')
    const nextTarget = (event.relatedTarget as HTMLElement | null)?.closest<HTMLElement>('.magnetic')
    if (!target || target === nextTarget) return
    target.style.setProperty('--magnetic-x', '0px')
    target.style.setProperty('--magnetic-y', '0px')
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell" onPointerMove={updateAmbientLight} onPointerOut={resetMagneticButton}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
