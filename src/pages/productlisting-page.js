import React from 'react'
import Header from '../components/header/header'
import ProductListing from '../components/productlisting/productlisting'
import '../assest/css/pages.css'


function ProductListingPage() {
  return (
    <div className='sectionContainer'>
      <Header/>
      <ProductListing/>
    </div>
  )
}

export default ProductListingPage
