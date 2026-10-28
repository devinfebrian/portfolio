import { useEffect, useRef, useState } from 'react'

type Drone = {
  context: AudioContext
  master: GainNode
}

function createDrone(): Drone {
  const context = new AudioContext()
  const master = context.createGain()
  master.gain.value = 0
  master.connect(context.destination)

  const lowpass = context.createBiquadFilter()
  lowpass.type = 'lowpass'
  lowpass.frequency.value = 260
  lowpass.Q.value = 0.7
  lowpass.connect(master)

  const low = context.createOscillator()
  low.type = 'sine'
  low.frequency.value = 43.65

  const lowGain = context.createGain()
  lowGain.gain.value = 0.24
  low.connect(lowGain).connect(lowpass)

  const high = context.createOscillator()
  high.type = 'sine'
  high.frequency.value = 55.16

  const highGain = context.createGain()
  highGain.gain.value = 0.1
  high.connect(highGain).connect(lowpass)

  const bufferLength = context.sampleRate * 3
  const buffer = context.createBuffer(1, bufferLength, context.sampleRate)
  const channel = buffer.getChannelData(0)
  let last = 0
  for (let index = 0; index < bufferLength; index += 1) {
    const white = Math.random() * 2 - 1
    last = (last + 0.02 * white) / 1.02
    channel[index] = last * 3.2
  }

  const noise = context.createBufferSource()
  noise.buffer = buffer
  noise.loop = true

  const noiseGain = context.createGain()
  noiseGain.gain.value = 0.045
  noise.connect(noiseGain).connect(lowpass)

  low.start()
  high.start()
  noise.start()

  return { context, master }
}

export function SoundToggle() {
  const [on, setOn] = useState(false)
  const drone = useRef<Drone | null>(null)

  useEffect(() => {
    return () => {
      void drone.current?.context.close()
      drone.current = null
    }
  }, [])

  const toggle = async () => {
    if (!on) {
      if (!drone.current) drone.current = createDrone()
      const { context, master } = drone.current
      await context.resume()
      master.gain.cancelScheduledValues(context.currentTime)
      master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), context.currentTime)
      master.gain.linearRampToValueAtTime(0.07, context.currentTime + 1.4)
      setOn(true)
      return
    }

    const current = drone.current
    if (current) {
      const { context, master } = current
      master.gain.cancelScheduledValues(context.currentTime)
      master.gain.setValueAtTime(master.gain.value, context.currentTime)
      master.gain.linearRampToValueAtTime(0.0001, context.currentTime + 0.6)
    }
    setOn(false)
  }

  return (
    <button
      type="button"
      className="sound"
      aria-pressed={on}
      onClick={() => void toggle()}
      title="Toggle the archive room tone"
    >
      <span className={`sound__bars ${on ? 'is-playing' : ''}`} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="sound__label">
        Sound <span>{on ? 'on' : 'off'}</span>
      </span>
    </button>
  )
}
