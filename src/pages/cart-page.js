import React from 'react'
import Cart from '../components/cart/cart'
import Header from '../components/header/header'
import '../assest/css/pages.css'
import {ToastContainer} from "react-toastify"

function CartPage() {
  return (
    <div className='sectionContainer' style={{height:'100vh',width:"100vw"}}>
      <Header/>
      <Cart/>
      <ToastContainer/>   
    </div>
  )
}

export default CartPage
