import { useRef} from "react"

function FocusInput() {
    const inputElement = useRef(null)
    
    function focusInput() {
        inputElement.current.focus()
    }


  return (
    <div>
        <input type="text" ref={inputElement}/>
        <button onClick={() => focusInput()}>Click to focus</button>
    </div>
  )
}

export default FocusInput