import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { sceneState } from './sceneState'
import { makePageTexture, makeSurfaceTexture } from './textures'

const damp = THREE.MathUtils.damp

type SheetConfig = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  offset: number
}

const sheets: SheetConfig[] = [
  { position: [-4.5, 0.35, -2.1], rotation: [0.18, 0.55, 0.12], scale: 2.1, offset: 0.4 },
  { position: [4.7, -0.35, -3.2], rotation: [-0.12, -0.42, -0.06], scale: 2.35, offset: 1.8 },
  { position: [-5.1, 1.6, -5.6], rotation: [0.1, 0.3, 0.03], scale: 2.4, offset: 3.1 },
  { position: [5.2, 1.9, -6.4], rotation: [0.22, -0.24, 0.09], scale: 2.15, offset: 4.7 },
  { position: [-3.6, -1.3, -9.2], rotation: [0.5, 0.18, 0.02], scale: 2.7, offset: 6.2 },
  { position: [3.4, 2.4, -10.5], rotation: [0.16, -0.35, -0.04], scale: 1.9, offset: 7.8 },
]

function PaperSheet({
  config,
  texture,
  reduced,
}: {
  config: SheetConfig
  texture: THREE.CanvasTexture
  reduced: boolean
}) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!mesh.current || reduced) return
    const time = clock.getElapsedTime()
    mesh.current.position.y = config.position[1] + Math.sin(time * 0.22 + config.offset) * 0.11
    mesh.current.rotation.z = config.rotation[2] + Math.sin(time * 0.16 + config.offset) * 0.025
    mesh.current.rotation.y = config.rotation[1] + Math.sin(time * 0.11 + config.offset) * 0.04
  })

  return (
    <mesh ref={mesh} position={config.position} rotation={config.rotation} scale={config.scale}>
      <planeGeometry args={[1.42, 1.9]} />
      <meshBasicMaterial
        map={texture}
        color="#fff4de"
        toneMapped={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Motes({ reduced, count }: { reduced: boolean; count: number }) {
  const points = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 11
      values[index * 3 + 1] = Math.random() * 5 - 1.8
      values[index * 3 + 2] = (Math.random() - 0.55) * 16
    }
    return values
  }, [count])

  useFrame(({ clock }) => {
    if (!points.current || reduced) return
    const time = clock.getElapsedTime()
    points.current.rotation.y = Math.sin(time * 0.045) * 0.05
    points.current.position.y = Math.sin(time * 0.1) * 0.08
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#f1d7a8"
        size={0.026}
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Rig({ reduced }: { reduced: boolean }) {
  const camera = useThree((state) => state.camera)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', handlePointer, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointer)
  }, [])

  useFrame((_, delta) => {
    const progress = reduced ? 0 : sceneState.progress
    const pointerX = reduced ? 0 : pointer.current.x
    const pointerY = reduced ? 0 : pointer.current.y

    camera.position.x = damp(camera.position.x, pointerX * 0.5, 2.2, delta)
    camera.position.y = damp(camera.position.y, 0.2 - pointerY * 0.22 + progress * 0.3, 2.2, delta)
    camera.position.z = damp(camera.position.z, 7 - progress * 3.2, 1.6, delta)
    camera.lookAt(pointerX * -0.5, 0.15 + progress * 0.25, -6)
    camera.rotation.z = damp(camera.rotation.z, pointerX * 0.005, 2, delta)
  })

  return null
}

export function Pressroom({ reduced }: { reduced: boolean }) {
  const pageTexture = useMemo(() => makePageTexture(), [])
  const deskTexture = useMemo(() => {
    const texture = makeSurfaceTexture('desk')
    texture.repeat.set(4, 4)
    return texture
  }, [])

  useEffect(() => {
    return () => {
      pageTexture.dispose()
      deskTexture.dispose()
    }
  }, [deskTexture, pageTexture])

  const smallScreen = typeof window !== 'undefined' && window.innerWidth <= 900

  return (
    <group>
      <Rig reduced={reduced} />

      <ambientLight color="#d9c49a" intensity={4.5} />
      <hemisphereLight args={['#f6e5c4', '#2d2116', 2.2]} />
      <directionalLight position={[-5, 6, 3]} color="#f8e8c7" intensity={4} />
      <pointLight position={[4, 2.2, -2]} color="#e5b877" intensity={24} distance={20} decay={2} />
      <pointLight position={[0, 1.6, 5]} color="#f3d9a8" intensity={18} distance={22} decay={2} />

      <mesh position={[0, 3.2, -10]}>
        <planeGeometry args={[44, 22]} />
        <meshBasicMaterial map={deskTexture} color="#c19862" toneMapped={false} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.85, -5]}>
        <planeGeometry args={[30, 26]} />
        <meshBasicMaterial map={deskTexture} color="#b08c60" toneMapped={false} />
      </mesh>

      {sheets.map((config) => (
        <PaperSheet key={config.offset} config={config} texture={pageTexture} reduced={reduced} />
      ))}

      <Motes reduced={reduced} count={smallScreen ? 130 : 380} />
    </group>
  )
}
