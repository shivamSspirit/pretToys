import React from 'react'
import AddressFormModal from '../components/address/addressForm'
import Header from '../components/header/header'
import ProfileComponent from '../components/profilecomp/profilecompo'

function ProfilePage() {
    return (
        <div>
            <Header />
            <ProfileComponent />
            <AddressFormModal/>
        </div>
    )
}

export default ProfilePage
