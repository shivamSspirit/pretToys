import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context'
import './profile.css'
import Account from './profilepages/account'
import Address from './profilepages/address'
import OrderDetails from './profilepages/order'
function ProfileComponent() {
    const location = useLocation()
    const { authCurrentUser } = useAuth()

    const [currentUser,setCurrentUser] = useState()

    useEffect(()=>{
        if(authCurrentUser){
            setCurrentUser(JSON.parse(authCurrentUser))
        }
    },[authCurrentUser])

    return (
        <div className='p-container'>
            <h3>my profile</h3>
            <div className='p-parts'>
                <div className='side-bar'>
                    <div className='ul-container'>
                        <ul className='navigations'>
                            <li className='navigation'>
                                <Link className={`link-navs ${location.pathname==='/profile'&&'active-page'}`} style={{ textDecoration: "none"}} to={'/profile'}>Profile</Link>
                            </li>
                            <li className='navigation'>
                                <Link className={`link-navs ${location.pathname==='/profile/address'&&'active-page'}`} style={{ textDecoration: "none" }} to={'/profile/address'}>Address</Link>
                            </li>
                            <li className='navigation'>
                                <Link className={`link-navs ${location.pathname==='/profile/account'&&'active-page'}`} style={{ textDecoration: "none" }} to={'/profile/account'}>Account</Link>
                            </li>
                            <li className='navigation'>
                                <Link className={`link-navs ${location.pathname==='/profile/orders'&&'active-page'}`} style={{ textDecoration: "none" }} to={'/profile/orders'}>Orders</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='main-section'>
                    {location.pathname === "/profile" &&
                        <>
                            <div className='profile-details'>
                                <h2>Profile deatils</h2>
                                <p>name:{currentUser?.firstName}</p>
                                <p>Email:{currentUser?.email}</p>
                            </div>
                        </>
                    }

                    {location.pathname === "profile/address" && (
                        <Address />
                    )}

                    {location.pathname === "profile/account" && (
                        <Account />
                    )}

                    {location.pathname === "profile/orders" && (
                        <OrderDetails />
                    )}
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default ProfileComponent
