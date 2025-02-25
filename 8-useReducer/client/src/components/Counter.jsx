import { useReducer, useState } from "react"
import {initialState, reducer} from "../counterReducer.js"


function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => dispatch({type: 'increment'})
    const handleDecrement = () => dispatch({type: 'decrement'})

    const handleIncrementByAmount =() => {dispatch({type: 'incrementByAmount', payload: Number(inputValue)})
    setInputValue(0)
    }

    const handleDecrementByAmount =() => {dispatch({type: 'decrementByAmount', payload: Number(inputValue)})
    setInputValue(0)

    }
    return (
    <div>
        <h1>Counter Exercise: {state.count}</h1>
        <button onClick={handleIncrement}>+ 1</button>
        <button onClick={handleDecrement}>- 1</button>

        <div>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleIncrementByAmount}>Add</button>
            <button onClick={handleDecrementByAmount}>Subtract</button>
        </div>
    </div>
)
}

export default Counter