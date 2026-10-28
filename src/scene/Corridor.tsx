import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { sceneState } from './sceneState'
import { makeSurfaceTexture } from './textures'

const damp = THREE.MathUtils.damp

const doorPositions = [-1.4, -4.0, -6.6, -9.2, -11.8, -14.4, -17.0, -19.6, -22.2]

function Door({ side, z }: { side: -1 | 1; z: number }) {
  const rotation = side === 1 ? -Math.PI / 2 : Math.PI / 2

  return (
    <group position={[side * 3.18, 1.16, z]}>
      <mesh rotation={[0, rotation, 0]}>
        <planeGeometry args={[1.18, 2.32]} />
        <meshStandardMaterial color="#24251d" roughness={0.88} metalness={0.04} />
      </mesh>
      <mesh position={[-side * 0.04, 0.04, -0.68]} castShadow>
        <boxGeometry args={[0.09, 2.48, 0.1]} />
        <meshStandardMaterial color="#1b1d16" roughness={0.82} />
      </mesh>
      <mesh position={[-side * 0.04, 0.04, 0.68]} castShadow>
        <boxGeometry args={[0.09, 2.48, 0.1]} />
        <meshStandardMaterial color="#1b1d16" roughness={0.82} />
      </mesh>
      <mesh position={[-side * 0.04, 1.31, 0]}>
        <boxGeometry args={[0.09, 0.1, 1.46]} />
        <meshStandardMaterial color="#1b1d16" roughness={0.82} />
      </mesh>
      <mesh position={[-side * 0.07, 0.45, 0.43]}>
        <boxGeometry args={[0.02, 0.1, 0.2]} />
        <meshStandardMaterial
          color="#8c7648"
          emissive="#5f4c2b"
          emissiveIntensity={0.3}
          metalness={0.45}
          roughness={0.42}
        />
      </mesh>
    </group>
  )
}

function CeilingFixture({ z, tone = 'warm' }: { z: number; tone?: 'warm' | 'green' }) {
  const glow = tone === 'green' ? '#93a67c' : '#8d8878'

  return (
    <group position={[0, 3.36, z]}>
      <mesh>
        <boxGeometry args={[1.55, 0.05, 0.18]} />
        <meshBasicMaterial color={glow} />
      </mesh>
      <mesh position={[0, -0.08, 0]}>
        <boxGeometry args={[1.68, 0.12, 0.26]} />
        <meshStandardMaterial color="#171a13" roughness={0.9} />
      </mesh>
    </group>
  )
}

function WallLamp() {
  return (
    <group>
      <mesh position={[-3.2, 2.0, -3.2]}>
        <boxGeometry args={[0.04, 0.38, 0.12]} />
        <meshStandardMaterial color="#1b1d16" roughness={0.82} />
      </mesh>
      <mesh position={[-3.17, 2.0, -3.2]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.06, 0.3]} />
        <meshBasicMaterial color="#9fb58a" />
      </mesh>
      <pointLight position={[-2.95, 2.0, -3.2]} color="#8fa87a" intensity={2.4} distance={4} decay={2} />
    </group>
  )
}

function RedThread({ z, sag, tagX }: { z: number; sag: number; tagX: number }) {
  const line = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-3.08, 2.26, z),
      new THREE.Vector3(0, 2.26 - sag, z),
      new THREE.Vector3(3.08, 2.26, z),
    )
    const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(36))
    const material = new THREE.LineBasicMaterial({
      color: '#7f2a20',
      transparent: true,
      opacity: 0.7,
    })
    return new THREE.Line(geometry, material)
  }, [sag, z])

  useEffect(() => {
    return () => {
      line.geometry.dispose()
      if (Array.isArray(line.material)) {
        line.material.forEach((material) => material.dispose())
      } else {
        line.material.dispose()
      }
    }
  }, [line])

  return (
    <group>
      <primitive object={line} />
      <mesh position={[tagX, 2.02, z + 0.01]} rotation={[0, 0, 0.05]}>
        <planeGeometry args={[0.32, 0.2]} />
        <meshStandardMaterial color="#d8cfb9" roughness={0.95} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[tagX, 2.12, z + 0.02]}>
        <planeGeometry args={[0.06, 0.05]} />
        <meshBasicMaterial color="#7f2a20" />
      </mesh>
    </group>
  )
}

function Dust({ reduced, count }: { reduced: boolean; count: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 6.4
      values[index * 3 + 1] = Math.random() * 3.1 + 0.1
      values[index * 3 + 2] = Math.random() * 30 - 29
    }
    return values
  }, [count])

  useFrame(({ clock }, delta) => {
    if (!pointsRef.current || reduced) return
    const time = clock.getElapsedTime()
    pointsRef.current.rotation.y += delta * 0.006
    pointsRef.current.position.y = Math.sin(time * 0.16) * 0.06
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#c9bda3"
        size={0.022}
        sizeAttenuation
        transparent
        opacity={0.4}
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

    const targetZ = 3.1 - progress * 9.2
    const targetX = pointerX * 0.42
    const targetY = 1.54 - pointerY * 0.1 + progress * 0.18

    camera.position.x = damp(camera.position.x, targetX, 2.4, delta)
    camera.position.y = damp(camera.position.y, targetY, 2.4, delta)
    camera.position.z = damp(camera.position.z, targetZ, 1.8, delta)
    camera.lookAt(pointerX * -0.16, 1.46 + progress * 0.2, -12)
    camera.rotation.z = damp(camera.rotation.z, pointerX * 0.008, 2, delta)
  })

  return null
}

export function Corridor({ reduced }: { reduced: boolean }) {
  const wallTexture = useMemo(() => {
    const texture = makeSurfaceTexture('concrete')
    texture.repeat.set(7, 1.5)
    return texture
  }, [])
  const floorTexture = useMemo(() => {
    const texture = makeSurfaceTexture('floor')
    texture.repeat.set(3, 11)
    return texture
  }, [])
  const ceilingTexture = useMemo(() => {
    const texture = makeSurfaceTexture('concrete')
    texture.repeat.set(4, 9)
    return texture
  }, [])

  useEffect(() => {
    return () => {
      wallTexture.dispose()
      floorTexture.dispose()
      ceilingTexture.dispose()
    }
  }, [ceilingTexture, floorTexture, wallTexture])

  const smallScreen = typeof window !== 'undefined' && window.innerWidth <= 900
  const lampRef = useRef<THREE.PointLight>(null)

  useFrame(({ clock }, delta) => {
    if (!lampRef.current) return
    if (reduced) {
      lampRef.current.intensity = damp(lampRef.current.intensity, 5.4, 6, delta)
      return
    }
    const time = clock.getElapsedTime()
    const pulse = Math.max(0, Math.sin(time * 16.3) * Math.sin(time * 4.7))
    const target = 5.4 * (0.84 + pulse * 0.16)
    lampRef.current.intensity = damp(lampRef.current.intensity, target, 16, delta)
  })

  return (
    <group>
      <Rig reduced={reduced} />

      <ambientLight color="#8f9b82" intensity={4.2} />
      <hemisphereLight args={['#58644e', '#0c0e09', 1.25]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -13]}>
        <planeGeometry args={[7.4, 34]} />
        <meshStandardMaterial map={floorTexture} roughness={0.88} metalness={0.03} color="#a2a88f" />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 3.42, -13]}>
        <planeGeometry args={[7.4, 34]} />
        <meshStandardMaterial map={ceilingTexture} roughness={0.94} color="#b6bca4" />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[-3.24, 1.7, -13]}>
        <planeGeometry args={[34, 3.5]} />
        <meshStandardMaterial map={wallTexture} roughness={0.92} color="#c2c7b2" />
      </mesh>
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[3.24, 1.7, -13]}>
        <planeGeometry args={[34, 3.5]} />
        <meshStandardMaterial map={wallTexture} roughness={0.92} color="#c2c7b2" />
      </mesh>

      <mesh position={[-3.17, 0.09, -13]}>
        <boxGeometry args={[0.14, 0.18, 32]} />
        <meshStandardMaterial color="#12140f" roughness={0.8} />
      </mesh>
      <mesh position={[3.17, 0.09, -13]}>
        <boxGeometry args={[0.14, 0.18, 32]} />
        <meshStandardMaterial color="#12140f" roughness={0.8} />
      </mesh>

      {doorPositions.map((z) => (
        <group key={z}>
          <Door side={-1} z={z} />
          <Door side={1} z={z} />
        </group>
      ))}

      <CeilingFixture z={-6.6} tone="green" />
      {[-11.8, -17.0, -22.2].map((z) => (
        <CeilingFixture key={z} z={z} />
      ))}

      <WallLamp />

      {smallScreen ? (
        <>
          <CeilingFixture z={0.8} tone="green" />
          <pointLight position={[0, 3, 1.1]} color="#93a67c" intensity={4.5} distance={5} decay={2} />
        </>
      ) : null}

      <pointLight position={[0, 0.35, -1.2]} color="#b49b68" intensity={6} distance={5} decay={2} />
      <pointLight position={[0, 2.85, 0.8]} color="#cfc7a9" intensity={6} distance={8} decay={2} />
      <pointLight ref={lampRef} position={[0, 3.05, -6.6]} color="#a8c294" intensity={11} distance={12} decay={2} />
      <pointLight position={[0, 3.05, -17]} color="#c5c4aa" intensity={9} distance={13} decay={2} />
      <pointLight position={[0, 2.75, -25.5]} color="#932c22" intensity={10} distance={10} decay={2} />

      <RedThread z={-8.2} sag={0.42} tagX={0.85} />
      <RedThread z={-15.4} sag={0.3} tagX={-0.7} />
      <RedThread z={-21.2} sag={0.5} tagX={1.25} />

      <mesh position={[0, 1.35, -28.8]}>
        <planeGeometry args={[2.2, 2.7]} />
        <meshStandardMaterial color="#12140e" roughness={0.86} />
      </mesh>
      <mesh position={[0, 2.85, -28.7]}>
        <boxGeometry args={[1.05, 0.22, 0.08]} />
        <meshBasicMaterial color="#a33528" toneMapped={false} />
      </mesh>

      <Dust reduced={reduced} count={smallScreen ? 240 : 700} />
    </group>
  )
}
