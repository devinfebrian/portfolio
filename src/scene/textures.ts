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

type Surface = 'paper' | 'desk'

export function makeSurfaceTexture(surface: Surface): THREE.CanvasTexture {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d')

  if (!context) {
    return new THREE.CanvasTexture(canvas)
  }

  const random = mulberry32(surface === 'paper' ? 1909 : 2826)
  const base = surface === 'paper' ? [231, 220, 197] : [38, 31, 22]
  context.fillStyle = `rgb(${base[0]} ${base[1]} ${base[2]})`
  context.fillRect(0, 0, size, size)

  const fleckCount = surface === 'paper' ? 22000 : 12000
  for (let index = 0; index < fleckCount; index += 1) {
    const dark = random() > 0.6
    const tone = dark ? 0 : 255
    const alpha = random() * (surface === 'paper' ? 0.05 : 0.035)
    context.fillStyle = `rgba(${tone} ${tone} ${tone} / ${alpha})`
    const x = random() * size
    const y = random() * size
    const width = random() * 1.8 + 0.25
    const height = random() * 0.8 + 0.2
    context.fillRect(x, y, width, height)
  }

  for (let index = 0; index < 40; index += 1) {
    const x = random() * size
    const width = random() * 18 + 2
    const gradient = context.createLinearGradient(x, 0, x + width, 0)
    gradient.addColorStop(0, 'rgba(0 0 0 / 0)')
    gradient.addColorStop(0.45, `rgba(0 0 0 / ${0.015 + random() * 0.03})`)
    gradient.addColorStop(1, 'rgba(0 0 0 / 0)')
    context.fillStyle = gradient
    context.fillRect(x, 0, width, size)
  }

  for (let index = 0; index < 10; index += 1) {
    const x = random() * size
    const y = random() * size
    const radius = random() * 92 + 24
    const stain = context.createRadialGradient(x, y, 0, x, y, radius)
    stain.addColorStop(0, `rgba(91 67 34 / ${0.02 + random() * 0.045})`)
    stain.addColorStop(1, 'rgba(91 67 34 / 0)')
    context.fillStyle = stain
    context.fillRect(x - radius, y - radius, radius * 2, radius * 2)
  }

  if (surface === 'paper') {
    for (let index = 0; index < 7; index += 1) {
      const x = random() * size
      const y = random() * size
      context.strokeStyle = `rgba(66 51 28 / ${0.025 + random() * 0.04})`
      context.lineWidth = random() * 0.7 + 0.25
      context.beginPath()
      context.moveTo(x, y)
      context.lineTo(x + 40 + random() * 90, y + (random() - 0.5) * 16)
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

export function makePageTexture(): THREE.CanvasTexture {
  const width = 512
  const height = 700
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')

  if (!context) {
    return new THREE.CanvasTexture(canvas)
  }

  const random = mulberry32(4711)
  context.fillStyle = '#f0e5ce'
  context.fillRect(0, 0, width, height)
  context.fillStyle = '#1b1710'

  context.fillRect(48, 42, width - 96, 8)
  context.font = 'bold 54px serif'
  context.textAlign = 'center'
  context.fillText('THE PROPHET', width / 2, 124)
  context.fillRect(48, 146, width - 96, 3)
  context.font = '12px monospace'
  context.fillText('MORNING EDITION', width / 2, 168)

  context.textAlign = 'left'
  context.font = 'bold 30px serif'
  context.fillText('The machine layer', 48, 226)
  context.fillText('reported in full', 48, 260)

  const gutter = 48
  const columnWidth = (width - gutter * 2 - 24) / 2
  for (let column = 0; column < 2; column += 1) {
    let y = 300
    const x = gutter + column * (columnWidth + 24)
    while (y < height - 52) {
      const lineWidth = columnWidth * (0.62 + random() * 0.34)
      context.fillStyle = `rgba(27 23 16 / ${0.5 + random() * 0.25})`
      context.fillRect(x, y, lineWidth, 2)
      y += 11
    }
    context.fillStyle = 'rgba(27 23 16 / 0.7)'
    context.fillRect(x, 282, columnWidth, 1)
  }

  context.fillStyle = 'rgba(27 23 16 / 0.16)'
  context.fillRect(48, 596, width - 96, 62)
  context.fillStyle = 'rgba(27 23 16 / 0.5)'
  context.fillRect(56, 604, 78, 46)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  return texture
}
