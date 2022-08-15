import React, { useEffect } from 'react'
import Header from '../components/header/header'
import Landing from '../components/landing/Land'
import '../assest/css/pages.css'

import { useGlobal } from '../contexts/globalContext'

function HomePage() {

  useEffect(()=>{
    
  })

  return (
    <div className='sectionContainer'>
      <Header />
      <Landing />
    </div>
  )
}

export default HomePage
