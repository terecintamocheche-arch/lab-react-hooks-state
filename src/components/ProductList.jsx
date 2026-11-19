
import React from 'react'
import ProductCard from './ProductCard'

// Sample product data
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category, onAddToCart }) => {
  return (
    <div>
      <h2>Available Products</h2>

      {sampleProducts
        .filter((product) => category === 'all' || product.category === category)
        .map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
    </div>
  )
}

export default ProductList
