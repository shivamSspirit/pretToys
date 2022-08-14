import React from 'react'
import AddressFormModal from '../components/address/addressForm'
import Header from '../components/header/header'
import ProfileComponent from '../components/profilecomp/profilecompo'

function ProfilePage() {
    return (
        <div className='profile-section' style={{width:'100vw',height:'100vh'}}>
            <Header />
            <ProfileComponent />
            <AddressFormModal/>
        </div>
    )
}

export default ProfilePage
