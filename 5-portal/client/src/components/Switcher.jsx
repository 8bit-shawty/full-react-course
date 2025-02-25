import { useState } from "react"

function Switcher() {
    const[switcher, setSwitcher] = useState(false)
    return (
    <div>
        {switcher ? (
            <span>DARK</span>
        ): (
            <span>LIGHT</span>
        )}

        <br/>
        <input type="text" key={switcher ? 'dark': 'light'}/>
        <button onClick={() => setSwitcher((s) => !s)}>Switch</button>
    </div>
)
}

export default Switcher