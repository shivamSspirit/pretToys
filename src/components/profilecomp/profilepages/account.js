import React from 'react'
import { useAuth } from '../../../contexts/auth-context'

function Account() {
    const { handleLogout } = useAuth()

    const logout = async () => {
        await handleLogout()
    }

    return (
        <div className='account-conatiner'>
            <h3>Account settings</h3>
            <button className='acc-log' onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Account
