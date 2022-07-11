import React from 'react'
import Header from '../components/header/header'
import SignUp from '../components/auth/signup/signup'
import '../assest/css/pages.css'

function SignupPage() {
  return (
    <div className='sectionContainer'>
      <Header/>
      <SignUp/>
    </div>
  )
}

export default SignupPage
