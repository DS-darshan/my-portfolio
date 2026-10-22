import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, Download } from 'lucide-react'

const roles = [
  'Senior Generative AI Engineer',
  'Agentic AI Engineer',
  'LLM Application Engineer',
]

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = motionPreference.matches
    let isInView = false
    const points: { x: number; y: number; dx: number; dy: number }[] = []
    let frame = 0
    let width = 0
    let height = 0

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      width = bounds.width
      height = bounds.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      points.length = 0
      const count = Math.min(52, Math.floor((width * height) / 12500))
      for (let index = 0; index < count; index += 1) {
        points.push({ x: Math.random() * width, y: Math.random() * height, dx: (Math.random() - 0.5) * 0.24, dy: (Math.random() - 0.5) * 0.24 })
      }
      window.cancelAnimationFrame(frame)
      draw()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      points.forEach((point, index) => {
        if (!reducedMotion) {
          point.x += point.dx
          point.y += point.dy
          if (point.x < 0 || point.x > width) point.dx *= -1
          if (point.y < 0 || point.y > height) point.dy *= -1
        }
        for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
          const next = points[nextIndex]
          const distance = Math.hypot(point.x - next.x, point.y - next.y)
          if (distance < 138) {
            context.strokeStyle = `rgba(136, 120, 255, ${0.14 * (1 - distance / 138)})`
            context.lineWidth = 0.7
            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(next.x, next.y)
            context.stroke()
          }
        }
        context.fillStyle = 'rgba(122, 213, 255, 0.58)'
        context.beginPath()
        context.arc(point.x, point.y, 1.4, 0, Math.PI * 2)
        context.fill()
      })
      if (!reducedMotion && isInView && document.visibilityState === 'visible') {
        frame = window.requestAnimationFrame(draw)
      }
    }

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting
      window.cancelAnimationFrame(frame)
      if (isInView && !reducedMotion && document.visibilityState === 'visible') draw()
    }, { threshold: 0 })

    const handleVisibilityChange = () => {
      window.cancelAnimationFrame(frame)
      if (document.visibilityState === 'visible' && isInView && !reducedMotion) draw()
    }

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches
      window.cancelAnimationFrame(frame)
      draw()
    }

    resize()
    visibilityObserver.observe(canvas)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    motionPreference.addEventListener('change', handleMotionPreference)
    return () => {
      window.cancelAnimationFrame(frame)
      visibilityObserver.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      motionPreference.removeEventListener('change', handleMotionPreference)
    }
  }, [])

  return <canvas aria-hidden="true" className="neural-canvas" ref={canvasRef} />
}

function Hero() {
  const [typedRole, setTypedRole] = useState(roles[0])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let roleIndex = 0
    let character = roles[0].length
    let deleting = true
    let timeout = 0

    const tick = (): void => {
      const currentRole = roles[roleIndex]
      if (deleting) {
        character -= 1
        setTypedRole(currentRole.slice(0, character))
        if (character === 0) {
          roleIndex = (roleIndex + 1) % roles.length
          deleting = false
          timeout = window.setTimeout(tick, 280)
          return
        }
      } else {
        character += 1
        setTypedRole(currentRole.slice(0, character))
      }

      if (!deleting && character === currentRole.length) {
        deleting = true
        timeout = window.setTimeout(tick, 1700)
      } else {
        timeout = window.setTimeout(tick, deleting ? 34 : 58)
      }
    }

    timeout = window.setTimeout(tick, 1900)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <section className="hero section container" id="home">
      <NeuralCanvas />
      <div className="hero-content" data-reveal>
      <p className="eyebrow">PORTFOLIO / 2026</p>
      <div className="hero-grid">
        <div>
          <p className="hero-kicker hero-stagger hero-stagger-1"><span className="status-dot" /> AVAILABLE FOR SELECT OPPORTUNITIES</p>
          <h1 className="hero-name hero-stagger hero-stagger-2">Darshan<br /><span>Patil<span className="hero-period">.</span></span></h1>
          <p className="hero-role hero-stagger hero-stagger-3"><span className="role-prefix">I build as a</span> <span className="role-text" aria-label={typedRole}>{typedRole}</span><span className="type-cursor" aria-hidden="true" /></p>
          <p className="hero-copy hero-stagger hero-stagger-4">Turning complex systems into useful AI products through LLMs, retrieval, and intelligent agents.</p>
          <div className="hero-actions hero-stagger hero-stagger-5">
            <a className="button button-primary magnetic" href="#projects">View my work <ArrowRight size={17} /></a>
            <a className="button button-quiet magnetic" href={`${import.meta.env.BASE_URL}darshan_patil_ai_engineer_resume.pdf`} target="_blank" rel="noreferrer"><Download size={16} /> Download resume</a>
          </div>
        </div>
        <div className="hero-portrait-wrap" data-reveal>
          <img className="hero-portrait" src={`${import.meta.env.BASE_URL}images/Polished%20Studio%20Portrait%20of%20a%20Smiling%20Professional.png`} alt="Portrait of Darshan Patil" />
          <div className="portrait-frame" aria-hidden="true" />
          <div className="portrait-caption"><span>AI / ML ENGINEERING</span><span>6.4 YEARS EXPERIENCE</span></div>
        </div>
      </div>
      <div className="hero-rule"><span>LLM & GENERATIVE AI</span><span>RAG & MULTI-AGENT SYSTEMS</span><span>PRODUCTION ML</span><a className="scroll-indicator" href="#about" aria-label="Scroll to about section"><ArrowDown size={14} /></a></div>
      </div>
    </section>
  )
}

export default Hero