import { SET_TODO, REMOVE_TODO, TOGGLE_TODO_STATUS } from '../action-types'

const initialState = { todos: [] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO: {
      return { ...state, todos: action.payload }
    }
    case TOGGLE_TODO_STATUS: {
      return { ...state ,todos:}
    }
    case REMOVE_TODO: {
      return { ...state,todos: }
    }
    default: {
      return state
    }
  }
}
export default reducer
