import { useReducer } from "react"

import Counter from "./components/Counter"

const initialState = {count: 0}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1}

    case 'decrement':
      return {...state, count: state.count - 1}

    case 'reset':
      return {...state, count: 0}

    default:
      return state;
  }
}

function App() {
  const[state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        {/*Exercise */}
        <Counter/>
      </>
  )
}

export default App
