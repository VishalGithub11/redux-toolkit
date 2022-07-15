import { useState } from 'react'
import './App.css'
import {selectedCount} from './selector/counterSelector'
import {useDispatch, useSelector } from 'react-redux'
import {increment, decrement} from './slice/counterSlice'

function App() {
  const [count, setCount] = useState(0)

 const dispatch = useDispatch()
 const {countValue, squaredValue} = useSelector(selectedCount)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Count is {countValue}</h2>
        <h2>square value is {squaredValue} </h2>
        <button onClick={()=> dispatch(increment())}>  inc + </button>
        <button onClick={()=> dispatch(decrement())}>dec -</button>
      </div>
      <p className="read-the-docs">
        Learning Vite + React + Redux toolkit
      </p>
    </div>
  )
}

export default App
