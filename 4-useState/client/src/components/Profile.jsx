import { useState } from "react"

function Profile() {
    const [profile, setProfile] = useState({
        name: '',
        age: '',
    })

    function handleChange(e){
        const {name, value} = e.target
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }))
    }
  return (
    <div>
        <h3>User Profile</h3>
        <label>Name: 
            <input type="text" name="name" value={profile.name} onChange={handleChange}/>
        </label>
        <label>Age:
            <input type="number" name="age" value={profile.age} onChange={handleChange}/>
        </label>

        <h3>NAME: {profile.name}</h3>
        <h3>AGE: {profile.age}</h3>
    </div>
  )
}

export default Profile