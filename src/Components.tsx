import { memo, useState } from 'react'
import { AnimationCanvas, AnimationKnob, Knob, NumberInput, Piano, Slider, XYPad } from '@tremolo-ui/react'
import { noteNumber } from '@tremolo-ui/functions'

import { Card } from './components/Card'

const SineWaveAnimation = memo(() => {
  return (
    <AnimationCanvas
      width={300}
      height={200}
      init={(ctx) => {
        ctx.font = '16px sans-serif'
        ctx.fillStyle = 'rgba(255, 255, 255, 0.87)'
        ctx.strokeStyle = 'cyan'
      }}
      draw={(ctx, w, h, count) => {
        ctx.clearRect(0, 0, w.current, h.current)
        ctx.fillText(`frame: ${count}`, 0, 16)
        // draw sine wave
        const halfH = h.current / 2
        ctx.beginPath()
        for (let i = 0; i < w.current; i++) {
          const y =
            halfH +
            halfH *
              0.5 *
              Math.sin((4 * Math.PI * (i + count * 2)) / w.current)
          if (i == 0) ctx.moveTo(i, y)
          else ctx.lineTo(i, y)
        }
        ctx.stroke()
      }}
    />
  )
})

export function Components() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0)

  return (
    <>
      <Card title='Knob'>
        <Knob
          value={value}
          min={0}
          max={100}
          onChange={(v) => setValue(v)}
        />
        <p>value: {value}</p>
      </Card>
      <Card title='AnimationKnob'>
        <AnimationKnob
          value={value}
          min={0}
          max={100}
          onChange={(v) => setValue(v)}
        />
        <p>value: {value}</p>
      </Card>
      <Card title='Piano'>
        <Piano noteRange={{ first: noteNumber('C3'), last: noteNumber('B3') }} />
      </Card>
      <Card title='Slider'>
        <Slider
          value={value}
          min={0}
          max={100}
          onChange={(v) => setValue(v)}
        />
        <p>value: {value}</p>
      </Card>
      <Card title='XYPad'>
        <XYPad
          x={{
            value,
            min: 0,
            max: 100,
          }}
          y={{
            value: value2,
            min: 0,
            max: 100,
          }}
          onChange={(x, y) => {
            setValue(x)
            setValue2(y)
          }}
        />
        <p>x: {value}, y: {value2}</p>
      </Card>
      <Card title='NumberInput'>
        <NumberInput
          value={value}
          min={0}
          max={100}
          units={[
            ['Hz', 1],
            ['kHz', 1000],
          ]}
          onChange={(v) => setValue(v)}
        />
      </Card>
      <Card title='AnimationCanvas' note='Note: Use with React.memo to prevent re-rendering.'>
        <SineWaveAnimation />
      </Card>
    </>
  )
}
