import ComponentA from "./components/ComponentA"
import { createContext } from "react"

import UserProfile from "./components/UserProfile"
import { UserProvider } from "./UserContext"
import UpdateUser from "./components/UpdateUser"

export const Data = createContext()
export const Data2 = createContext()

function App() {
  const name = 'Max'
  const age = 26

  return (
    <>
    {/*Context allows us to pass the value to any prop its wrapped around */}
      {/* <ComponentA name={name}/> */}{/*No longer needed */}
      <Data.Provider value={name}>
        <Data2.Provider value={age}>
          <ComponentA/>
        </Data2.Provider>
      </Data.Provider>

      <hr/>

      {/*Challenge */}
      <UserProvider>
        <UserProfile/>
        <UpdateUser/>
      </UserProvider>
    </>
  )
}

export default App
