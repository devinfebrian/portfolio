import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Corridor } from './Corridor'
import { sceneState } from './sceneState'

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      canvas.getContext('webgl2') ??
        canvas.getContext('webgl') ??
        canvas.getContext('experimental-webgl'),
    )
  } catch {
    return false
  }
}

export function SceneCanvas({ reduced }: { reduced: boolean }) {
  const [available, setAvailable] = useState(true)
  const [smallScreen, setSmallScreen] = useState(false)

  useEffect(() => {
    setAvailable(hasWebGL())
    setSmallScreen(window.innerWidth <= 900)
  }, [])

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      sceneState.progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
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

  if (!available) {
    return <div className="world-canvas world-canvas--fallback" aria-hidden="true" />
  }

  return (
    <div className="world-canvas" aria-hidden="true">
      <Canvas
        dpr={smallScreen ? [1, 1.25] : [1, 1.7]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        camera={{ position: [0, 1.54, 3.1], fov: smallScreen ? 76 : 58, near: 0.1, far: 48 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 0.95
          gl.shadowMap.enabled = false
        }}
      >
        <color attach="background" args={['#080a07']} />
        <fog attach="fog" args={['#080a07', 4.2, reduced ? 20 : 26]} />
        <Corridor reduced={reduced} />
      </Canvas>
    </div>
  )
}
