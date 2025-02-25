// import React from 'react'

function ProductInfo() {
    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In Stock"
    }
  return (
    <div>
        <section>
            <h3>Name: {product.name}</h3>
            <h5>Price: {product.price}</h5>
            <p style={{color: 'green'}}>{product.availability}</p>
        </section>
    </div>
  )
}

export default ProductInfo