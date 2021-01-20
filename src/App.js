import React, {useState} from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(() => {
    return 4
  })

  function decrementCount(){
    setcount(prevCount => prevCount - 1)
  }

  function incrementCount(){
    setcount(prevCount => prevCount + 1)
  }

  return (
    <div className='box'>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App