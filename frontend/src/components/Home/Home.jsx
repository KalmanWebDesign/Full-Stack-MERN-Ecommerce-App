import React from 'react'
import Products from '../Products/Products'
import './Home.css'

const Home = ({products, addToCart}) => {
  return (
    <div>
        <Products products={products} addToCart={addToCart}/>
    </div>
  )
}

export default Home