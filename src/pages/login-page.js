import React from 'react'
import Header from '../components/header/header'
import Login from '../components/auth/login/login'
import '../assest/css/pages.css'

function LoginPage() {
  return (
    <div className='sectionContainer'>
      <Header/>
      <Login/>
    </div>
  )
}

export default LoginPage
