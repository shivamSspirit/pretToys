import React from 'react'
import Header from '../components/header/header'
import Login from '../components/auth/login/login'
import './loginpage.css'


function LoginPage() {
  console.log('kelji')
  return (
    <div className='sectionContainer'>
      <Header/>
      <Login/>
    </div>
  )
}

export default LoginPage
