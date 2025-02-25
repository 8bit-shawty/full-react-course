// import React from 'react'

function ProductList() {
    const products = [
        {
            id: 1, name: 'Phone', price: "$699"
        },
        {
            id: 1, name: 'Laptop', price: "$1299"
        },
        {
            id: 1, name: 'Headphones', price: "$199"
        }
    ]
  return (
    <div>
        {products.map((product) => (
            <ul key={product.id}>
                <li>Name: {product.name}</li>
                <li>Price: {product.price}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList