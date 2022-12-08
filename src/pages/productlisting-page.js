import React from 'react'
import Header from '../components/header/header'
import ProductListing from '../components/productlisting/productlisting'
import { ToastContainer } from 'react-toastify';


function ProductListingPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <ProductListing />
      <ToastContainer />
    </div>
  )
}

export default ProductListingPage
