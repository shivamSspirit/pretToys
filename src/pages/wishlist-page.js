import React from 'react'
import Header from '../components/header/header'
import Wishlist from '../components/wishlist/wishlist'
import '../assest/css/pages.css'

function WishlistPage() {
  return (
    <div className='sectionContainer'>
      <Header/>
      <Wishlist/>
    </div>
  )
}

export default WishlistPage
