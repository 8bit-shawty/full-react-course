import { useState, useEffect } from "react"

function FetchDataEffect() {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            if(data && data.length) setPosts(data)
        }
    getPosts()
    }, [])

  return (
    <div>
            {posts.map(post => (
                <li key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </li>
            ))}
    </div>
  )
}

export default FetchDataEffect