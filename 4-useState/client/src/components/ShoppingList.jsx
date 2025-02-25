import { useState } from "react"

function ShoppingList() {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    if(!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity)
    }

    setItems((prevItems) => [...prevItems, newItem])
    setName('')
    setQuantity('')
  }
  return (
    <div>
        <h1>Shopping List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Item name" value={name} onChange={e => setName(e.target.value)}/>
          <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
          <button type="submit">Add item</button>
        </form>

        {items.map((item, i) => (
          <li key={i}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
    </div>
  )
}

export default ShoppingList