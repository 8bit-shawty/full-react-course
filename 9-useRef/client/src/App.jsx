import { useEffect, useRef, useState } from "react"
import FocusInput from "./FocusInput"
import Timer from "./Timer"

import useFetch from "./useFetch"

import UniqueId from "./components/UniqueId"

function App() {
  const inputElement = useRef(null)
  // console.log(inputElement)

  function focusInput(){
    inputElement.current.focus()
    inputElement.current.value = '8bit-shawty'
  }

  //Custom Hooks
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  // }, [])

  const[data] = useFetch('https://jsonplaceholder.typicode.com/todos')

  return (
    <>
      <input type="text" ref={inputElement}/>
      <button onClick={() => focusInput()}>Focus & write 8bit-shawty</button>
      <hr />

      {/*Exercise */}
      <FocusInput/>

      <hr />
      {/* <Timer/> */}

      {/*Custom Hooks*/}
    {data && 
      data.slice(0, 10).map((item) => {
        return <p key={item.key}>{item.title}</p>
      })
    }

    {/*useId -- creates unique ids for each component*/}
    <UniqueId/>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, perspiciatis cumque. Provident eum dolor blanditiis aut recusandae maxime fugit eaque.</p>

    <UniqueId/>
    </>
  )
}

export default App
