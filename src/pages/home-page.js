import React from 'react'
import Header from '../components/header/header'
import Landing from '../components/landing/Land'
import '../assest/css/pages.css'

function HomePage() {
  return (
    <div className='sectionContainer'>
        <Header/>
        <Landing/>
    </div>
  )
}

export default HomePage
