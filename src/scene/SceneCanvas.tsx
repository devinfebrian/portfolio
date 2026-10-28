import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Pressroom } from './Pressroom'
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
        dpr={smallScreen ? [1, 1.2] : [1, 1.6]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.2, 7], fov: smallScreen ? 70 : 52, near: 0.1, far: 40 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.24
          gl.shadowMap.enabled = false
        }}
      >
        <color attach="background" args={['#bd966b']} />
        <fog attach="fog" args={['#bd966b', 6, 30]} />
        <Pressroom reduced={reduced} />
      </Canvas>
    </div>
  )
}
