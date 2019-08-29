import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import '../scss/components/_App.scss'

const App = () => (
  <div className="container">
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
