// import React from 'react'

function UserList() {
    const users = [
        {
            id: 1, name: 'Alice', age: 25
        },
        {
            id: 2, name: 'Bob', age: 20
        },
        {
            id: 3, name: 'Charlie', age: 22
        }
    ]
  return (
    <div>
        {users.map((user) => (
            <ul key={user.id}>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>

            </ul>
        ))}
    </div>
  )
}

export default UserList