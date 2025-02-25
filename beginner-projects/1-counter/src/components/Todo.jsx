import { useState } from "react"
import '../style.css'

function Todo() {
    const[todos, setTodos] = useState([])
    const[input, setInput] = useState('')

    const handleSubmit = () => {
        if(!input.trim()) return;

        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Date.now()
            })
        })

        setInput('')
    }

    const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id))
  return (
    <div className="container">
        <input type="text" placeholder="New Todo" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>

        <ul>
            {todos.map(({text, id}) => (
                <li className="todo" key={id}>
                    <span>{text}</span>
                    <button className="close" onClick={() => removeTodo(id)}>x</button>
                </li>
            ))}
        </ul>
    </div>  
  )
}

export default Todo