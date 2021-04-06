import { combineReducer } from 'redux'
import counterReducer from './counter-reducer'
import TodoReducer from './todo-reducer'
export const reducer = combineReducer({
  todo: TodoReducer,
  counter: counterReducer,
})
