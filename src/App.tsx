import { Components } from './Components'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// TODO
// import '@tremolo-ui/react/styles/index.css'
import './App.css'

function App() {
  return (
    <main>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + <a href="https://tremolo-ui.vercel.app/" target="_blank">tremolo-ui</a></h1>
      <Components />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
