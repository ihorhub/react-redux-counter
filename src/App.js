import React from 'react'
import { useSelector, useDispatch, useEffect } from 'react-redux'
import './App.css'
import {
  INC_COUNTER,
  DEC_COUNTER,
  RESET_COUNTER,
} from '../src/redux/action-types'
import {
  decCounter,
  incCounter,
  resetCounter,
  setTodos,
  fetchTodos,
} from '../src/redux/action-creators'

function App() {
  // const counter = useSelector(({ counter }) => counter.counter)
  // const todos = useSelector(({ todos }) => todos.todos)
  const { todos, counter } = useSelector(
    ({ counter: { counter }, todos: { todos } }) => ({
      todos,
      counter,
    })
  )
  const dispatch = useDispatch()
  useEffect(() => {
    fetchTodos(dispatch)
  }, [dispatch])

  const handleInc = () => dispatch(incCounter)
  const handleDec = () => dispatch(decCounter)
  const handleReset = () => dispatch(resetCounter)

  // const fetchTodos=async()=>{
  //  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //  const data = await response.json()
  //  dispatch(setTodos(data))
  // }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleInc}>INC</button>
      <button onClick={handleDec}>DEC</button>
      <button onClick={handleReset}>RESET</button>

      <h2>start lala</h2>
      {todos.map((todo) => (
        <h2>
          {todo.id}-{todo.title}
        </h2>
      ))}
    </div>
  )
}

export default App
