import React from 'react'
import Header from '../components/header/header'
import Login from '../components/auth/login/login'


function LoginPage() {
  return (
    <div style={{ width: '100vw',height: '100vh'}}>
      <Header/>
      <Login/>
    </div>
  )
}

export default LoginPage
