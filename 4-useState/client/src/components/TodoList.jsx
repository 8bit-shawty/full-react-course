import { useState } from "react"

function TodoList() {
    const [list, setList] = useState(['Wake up', 'Make bed', 'watch tv' , 'sleep'])
    const [input, setInput] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        if(input.trim()){
            setList([...list, input])
            setInput('')
        }
    }

    function handleChange(e){
        setInput(e.target.value)
    }
  return (
    <div>
        <h1>Todo List</h1>
        {list.map((item, i) => (
            <ul key={i}>
                <li>{item}</li>
            </ul>
        ))}
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange} placeholder="Enter new item"/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default TodoList