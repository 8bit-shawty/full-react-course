
function Greeting({timeOfDay, }) {
  return (
    <div>
        {timeOfDay === "morning"
        ?
            <h1>Good Morning</h1>
        :
            <h1>Good Afternoon</h1>
        }
    </div>
  )
}

export default Greeting