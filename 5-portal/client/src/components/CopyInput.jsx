import { useState } from "react"
import PopupComponent from "./PopupComponent"

function CopyInput() {
    const [inputValue, setInputValue] = useState('')
    const [copied, setCopied] =useState(false)

    function handleCopy(){
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 5000)
        })
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={handleCopy}>Copy</button>
            <PopupComponent copied={copied}/>
        </div>
    )
}

export default CopyInput