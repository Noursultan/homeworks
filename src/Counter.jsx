import { useState } from 'react'
import './App.css'
import {increase} from './store/counterSlice'
import {useDispatch, useSelector} from 'react-redux'

function Counter() {
  const [val, setVal] = useState(1)
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.value)
  const handleIncrease = () => {
      dispatch(increase(val))
  }
  return (
    <>
      <input 
        type="number" 
        onChange={e => setVal(Number(e.target.value))}
        value={val} />
      |<button onClick={handleIncrease} >+</button> 
      {counter}
    </>
  )
}

export default Counter
