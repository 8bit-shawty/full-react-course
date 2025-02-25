import { useEffect } from "react"

function BasicEffect() {
    useEffect(() => {
        console.log('Rendering once')
    }, [])
    return (
    <div>
        <h1>basic effect</h1>
    </div>
)
}

export default BasicEffect