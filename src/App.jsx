import { useState } from 'react'
import './App.css'
import {increase} from './store/counterSlice'
import {useDispatch, useSelector} from 'react-redux'
import TodoList from './TodoList'


function App() {  
  return (
    <>
      <TodoList />
    </>
  )
}

export default App
