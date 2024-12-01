import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { AnimationCanvas, Knob, NumberInput, Slider } from '@tremolo-ui/react'

function App() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + <a href="https://tremolo-ui.vercel.app/" target="_blank">tremolo-ui</a></h1>
      <div className="card">
        <h2>Knob</h2>
        <Knob
          value={value}
          min={0}
          max={100}
          onChange={(v) => setValue(v)}
        />
        <p>value: {value}</p>
      </div>
      <div className="card">
        <h2>Slider</h2>
        <Slider
          value={value2}
          min={0}
          max={100}
          onChange={(v) => setValue2(v)}
        />
        <p>value: {value2}</p>
      </div>
      <div className="card">
        <h2>NumberInput</h2>
        <NumberInput
          value={value3}
          units={[
            ['Hz', 1],
            ['kHz', 1000],
          ]}
          onChange={(v) => setValue3(v)}
        />
      </div>
      <div className="card">
        <h2>AnimationCanvas</h2>
        <p className="note">Note: Here, it is redrawn by updating the state.</p>
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
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
