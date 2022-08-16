import React from 'react'
import Header from '../components/header/header'
import Wishlist from '../components/wishlist/wishlist'
import {ToastContainer} from "react-toastify"

function WishlistPage() {
  return (
    <div className='sectionContainer'>
      <Header/>
      <Wishlist/>
      <ToastContainer/>
    </div>
  )
}

export default WishlistPage
