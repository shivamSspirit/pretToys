import React from 'react'
import Header from '../components/header/header'
import SignUp from '../components/auth/signup/signup'

function SignupPage() {
  return (
    <div className='sectionContainer' style={{height:"100vh",width:"100vw"}}>
      <Header/>
      <SignUp/>
    </div>
  )
}

export default SignupPage
