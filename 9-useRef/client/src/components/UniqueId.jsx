import { useId } from "react"

function UniqueId() {
    const id = useId()
  return (
    <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="email" id={`${id}-email`} />

        <br />

        <label htmlFor={`${id}-password`}>Password</label>
        <input type="password" id={`${id}-password`} />
    </div>
  )
}

export default UniqueId