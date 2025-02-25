import { useEffect, useState } from "react"

function CounterEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Increment ${count}`
        console.log('Incrementing counter and title')
    })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}> Increment</button>
    </div>
  )
}

export default CounterEffect