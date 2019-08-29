import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Header from './Header'
import '../scss/components/_app.scss'

const App = () => (
  <div className="container">
    <Header />
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
