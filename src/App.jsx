import { useState, useEffect } from 'react'
import './App.css'
import {selectedCount} from './selector/counterSelector'
import {useDispatch, useSelector } from 'react-redux'
import {increment, decrement} from './slice/counterSlice'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Employee from './Employee'
import { EditEmployee } from './EditEmployee'

function App() {
  const [count, setCount] = useState(0)

 const dispatch = useDispatch()
 const {countValue, squaredValue} = useSelector(selectedCount)

  return (
    

<Router>

<div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>Vite + React + RTK</h2>
      {/* <div className="card">
        <h2>Count is {countValue}</h2>
        <h2>square value is {squaredValue} </h2>
        <button onClick={()=> dispatch(increment())}>  inc + </button>
        <button onClick={()=> dispatch(decrement())}>dec -</button>
      </div> */}
      <Link to="/all_employee">All Employee</Link>

  <Routes>
      <Route exact path='/all_employee' element={<Employee />} />
      <Route exact path='/employee/edit/:id' element={<EditEmployee/>} />
      

  </Routes>
  <footer>
       <p className="read-the-docs">
        Learning Vite + React + Redux toolkit
      </p>
      </footer>

    </div>
</Router>
  

   
  )
}

export default App
