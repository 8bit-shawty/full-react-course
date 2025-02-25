import UserList from "./components/UserList"
import ProductList from "./components/ProductList"

function App() {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <>
      {numbers.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
      <UserList/>
      <ProductList/>
    </>
  )
}

export default App
