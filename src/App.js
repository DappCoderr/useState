import React, {useState} from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(() => {return 0})
  const [theme, settheme] = useState('😐')

  function decrementCount(){
    setcount(prevCount => prevCount - 1)
    settheme(prevCount => '🥺')
  }

  function incrementCount(){
    setcount(prevCount => prevCount + 1)
    settheme(prevCount => '😃')
  }


  // const [state, setstate] = useState({count:4, theme: 'likes'})
  // const count = state.count
  // const theme = state.theme

  // function decrementCount(){
  //   setstate( prevstate => {
  //     return{ ...prevstate, count: prevstate.count - 1}
  //   })
  // }

  // function incrementCount(){
  //   setstate(prevstate => {
  //     return{ ...prevstate, count:prevstate.count + 1}
  //   })
  // }

  return (
    <div className='box'>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App