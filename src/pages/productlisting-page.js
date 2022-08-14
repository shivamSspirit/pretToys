import React from 'react'
import Header from '../components/header/header'
import ProductListing from '../components/productlisting/productlisting'
import '../assest/css/pages.css'
import { ToastContainer } from 'react-toastify';


function ProductListingPage() {
  return (
    <div className='sectionContainer'>
      <Header/>
      <ProductListing/>
      <ToastContainer/>
    </div>
  )
}

export default ProductListingPage
