import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' // optimized way of loading images in app
import './App.css'

let imgHref = "https://react.dev";

function TopSection() {
  let desc:string  = "VITE + GG REACT";
  return (<>
    <div>
      <a href={imgHref} target="_blank">
        <img src={reactLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={viteLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>{desc}</h1>
  </>)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopSection></TopSection>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
