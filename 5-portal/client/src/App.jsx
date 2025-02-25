import CopyInput from "./components/CopyInput"
import Switcher from "./components/Switcher"

import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [value, setValue] = useState(0)
  const[something, setSomething] = useState(0)

  //Data Fetching
  const[data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()

      if(data && data.length)setData(data)
    }

    getData()
  }, [])

  //no dependency array will fire every time
  // useEffect(() => {
  //   console.log('call useeffect')
  //   document.title = `Increment ${value}`
  // })

  //empty dependecy array will fire on the initial component render
  // useEffect(() => {
  //   console.log('call useeffect')
  //   document.title = `Increment ${value}`
  // }, [])

  //component will fire when the state changes
  useEffect(() => {
    console.log('call useeffect')
    document.title = `Increment ${value}`
  }, [value])


  return (
    <>
    {/*CREATE PORTAL */}
      <CopyInput/>
    <hr/>
    {/*UNIQUE KEYS */}
    <Switcher/>
    <hr/>

    {/*USEEFFECT */}
    <h2>{value}</h2>
    <button onClick={() => setValue(value + 1)}>increment</button>
    <button onClick={() => setSomething(something + 1)}>Increment by something</button>
    <hr/>

    <ul>
      {data.map(todo => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
