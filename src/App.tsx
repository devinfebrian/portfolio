import { lazy, Suspense, useEffect } from 'react'
import { Masthead } from './components/Masthead'
import { NavRail } from './components/NavRail'
import { ScrollThread } from './components/ScrollThread'
import { useReducedMotion } from './hooks/useReducedMotion'
import { Checkout } from './sections/Checkout'
import { Cover } from './sections/Cover'
import { Exhibits } from './sections/Exhibits'
import { FieldKit } from './sections/FieldKit'
import { Footer } from './sections/Footer'
import { Intake } from './sections/Intake'

const SceneCanvas = lazy(async () => {
  const module = await import('./scene/SceneCanvas')
  return { default: module.SceneCanvas }
})

export default function App() {
  const reduced = useReducedMotion()

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4))
    }
    const schedule = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to the file
      </a>

      <Suspense fallback={<div className="world-canvas world-canvas--fallback" aria-hidden="true" />}>
        <SceneCanvas reduced={reduced} />
      </Suspense>
      <div className="world-wash" aria-hidden="true" />
      <div className="world-vignette" aria-hidden="true" />

      <Masthead />
      <ScrollThread />
      <NavRail />

      <main id="main">
        <Cover />
        <Intake />
        <Exhibits />
        <FieldKit />
        <Checkout />
      </main>

      <Footer />
    </>
  )
}
