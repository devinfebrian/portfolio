import { useEffect, useRef, useState } from 'react'

type PressRoom = {
  context: AudioContext
  master: GainNode
}

function createPressRoom(): PressRoom {
  const context = new AudioContext()
  const master = context.createGain()
  master.gain.value = 0
  master.connect(context.destination)

  const lowpass = context.createBiquadFilter()
  lowpass.type = 'lowpass'
  lowpass.frequency.value = 420
  lowpass.Q.value = 0.7
  lowpass.connect(master)

  const bed = context.createOscillator()
  bed.type = 'sine'
  bed.frequency.value = 58.27

  const bedGain = context.createGain()
  bedGain.gain.value = 0.16
  bed.connect(bedGain).connect(lowpass)

  const wheel = context.createOscillator()
  wheel.type = 'triangle'
  wheel.frequency.value = 87.31

  const wheelGain = context.createGain()
  wheelGain.gain.value = 0.055
  wheel.connect(wheelGain).connect(lowpass)

  const bufferLength = context.sampleRate * 3
  const buffer = context.createBuffer(1, bufferLength, context.sampleRate)
  const channel = buffer.getChannelData(0)
  let last = 0
  for (let index = 0; index < bufferLength; index += 1) {
    const white = Math.random() * 2 - 1
    last = (last + 0.014 * white) / 1.014
    channel[index] = last * 2.8
  }

  const paper = context.createBufferSource()
  paper.buffer = buffer
  paper.loop = true

  const paperFilter = context.createBiquadFilter()
  paperFilter.type = 'bandpass'
  paperFilter.frequency.value = 860
  paperFilter.Q.value = 0.55

  const paperGain = context.createGain()
  paperGain.gain.value = 0.03

  const rhythm = context.createOscillator()
  rhythm.type = 'sine'
  rhythm.frequency.value = 0.42

  const rhythmDepth = context.createGain()
  rhythmDepth.gain.value = 0.014

  rhythm.connect(rhythmDepth).connect(paperGain.gain)
  paper.connect(paperFilter).connect(paperGain).connect(lowpass)

  bed.start()
  wheel.start()
  paper.start()
  rhythm.start()

  return { context, master }
}

export function SoundToggle() {
  const [on, setOn] = useState(false)
  const pressRoom = useRef<PressRoom | null>(null)

  useEffect(() => {
    return () => {
      void pressRoom.current?.context.close()
      pressRoom.current = null
    }
  }, [])

  const toggle = async () => {
    if (!on) {
      if (!pressRoom.current) pressRoom.current = createPressRoom()
      const { context, master } = pressRoom.current
      await context.resume()
      master.gain.cancelScheduledValues(context.currentTime)
      master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), context.currentTime)
      master.gain.linearRampToValueAtTime(0.06, context.currentTime + 1.2)
      setOn(true)
      return
    }

    const current = pressRoom.current
    if (current) {
      const { context, master } = current
      master.gain.cancelScheduledValues(context.currentTime)
      master.gain.setValueAtTime(master.gain.value, context.currentTime)
      master.gain.linearRampToValueAtTime(0.0001, context.currentTime + 0.5)
    }
    setOn(false)
  }

  return (
    <button
      type="button"
      className="sound"
      aria-pressed={on}
      onClick={() => void toggle()}
      title="Toggle the press-room atmosphere"
    >
      <span className={`sound__bars ${on ? 'is-playing' : ''}`} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="sound__label">
        Press <span>{on ? 'on' : 'off'}</span>
      </span>
    </button>
  )
}
