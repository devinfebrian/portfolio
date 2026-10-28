import * as THREE from 'three'

function mulberry32(seed: number) {
  let value = seed
  return () => {
    value |= 0
    value = (value + 0x6d2b79f5) | 0
    let t = Math.imul(value ^ (value >>> 15), 1 | value)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Surface = 'concrete' | 'floor'

export function makeSurfaceTexture(surface: Surface): THREE.CanvasTexture {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d')

  if (!context) {
    return new THREE.CanvasTexture(canvas)
  }

  const random = mulberry32(surface === 'concrete' ? 1313 : 8081)
  const base = surface === 'concrete' ? [58, 63, 51] : [46, 50, 41]
  context.fillStyle = `rgb(${base[0]} ${base[1]} ${base[2]})`
  context.fillRect(0, 0, size, size)

  for (let index = 0; index < 16000; index += 1) {
    const tone = random() > 0.55 ? 255 : 0
    const alpha = random() * 0.045
    context.fillStyle = `rgba(${tone} ${tone} ${tone} / ${alpha})`
    const x = random() * size
    const y = random() * size
    const radius = random() * 1.6 + 0.3
    context.fillRect(x, y, radius, radius)
  }

  for (let index = 0; index < 24; index += 1) {
    const x = random() * size
    const width = random() * 28 + 4
    const gradient = context.createLinearGradient(x, 0, x + width, 0)
    gradient.addColorStop(0, 'rgba(0 0 0 / 0)')
    gradient.addColorStop(0.45, `rgba(0 0 0 / ${0.05 + random() * 0.09})`)
    gradient.addColorStop(1, 'rgba(0 0 0 / 0)')
    context.fillStyle = gradient
    context.fillRect(x, 0, width, size)
  }

  for (let index = 0; index < 8; index += 1) {
    const x = random() * size
    const y = random() * size
    const radius = random() * 90 + 28
    const stain = context.createRadialGradient(x, y, 0, x, y, radius)
    stain.addColorStop(0, `rgba(12 14 10 / ${0.12 + random() * 0.16})`)
    stain.addColorStop(1, 'rgba(12 14 10 / 0)')
    context.fillStyle = stain
    context.fillRect(x - radius, y - radius, radius * 2, radius * 2)
  }

  if (surface === 'floor') {
    for (let index = 0; index < 14; index += 1) {
      const x = random() * size
      const y = random() * size
      context.strokeStyle = `rgba(8 9 6 / ${0.18 + random() * 0.2})`
      context.lineWidth = random() * 1.2 + 0.3
      context.beginPath()
      context.moveTo(x, y)
      context.lineTo(x + (random() - 0.5) * 80, y + random() * 54)
      context.stroke()
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  return texture
}
