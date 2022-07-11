import React from 'react'
import Cart from '../components/cart/cart'
import Header from '../components/header/header'
import '../assest/css/pages.css'

function CartPage() {
  return (
    <div className='sectionContainer'>
      <Header/>
      <Cart/>
    </div>
  )
}

export default CartPage
