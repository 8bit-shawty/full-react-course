import Person from "./components/Person"
import Product from "./components/Product"

import Weather from "./components/Weather"
import UserStatus from "./components/UserStatus"
import Greeting from "./components/Greeting"

import StyledCard from "./components/StyledCard"
import ProfileCard from "./components/ProfileCard"
import IconComponent from "./components/IconComponent"

function App() {

  return (
    <>
      {/* PROPS */}
      <Person name="Jeffery Smith" age={20}/>
      <Product name="iPhone 16 Pro" price={1200}/>
      <hr></hr>
      {/*CONDITIONAL RENDERING */}
      <Weather temperature={110}/>

      <UserStatus loggedIn={true} isAdmin={false}/>

      <Greeting timeOfDay='afternoon'/>

      {/*STYLING */}
      <StyledCard/>
      <ProfileCard/>
      <IconComponent/>
    </>
  )
}

export default App
