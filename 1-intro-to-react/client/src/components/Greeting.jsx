// import React from 'react'

function Greeting() {
    let date = new Date()
    let name = "Yodie Woahdi"
  return (
    <div>
        <h1>Welcome, {name}</h1>
        <p>Todays date is: {date.toString()}</p>
    </div>
  )
}

export default Greeting