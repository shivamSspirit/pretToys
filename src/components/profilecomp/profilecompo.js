import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './profile.css'
import Account from './profilepages/account'
import Address from './profilepages/address'
import OrderDetails from './profilepages/order'
function ProfileComponent() {
    const location = useLocation()
    console.log('location',location)
    return (
        <div className='p-container'>
            <h3>my profile</h3>
            <div className='p-parts'>
                <div className='side-bar'>
                    <div className='ul-container'>
                        <ul className='navigations'>
                            <li className='navigation'>
                                <Link style={{textDecoration:"none",color:'white'}} to={'/profile'}>one</Link>
                            </li>
                            <li className='navigation'>
                                <Link style={{textDecoration:"none",color:'white'}} to={'/profile/address'}>two</Link>
                            </li>
                            <li className='navigation'>
                                <Link style={{textDecoration:"none",color:'white'}} to={'/profile/account'}>three</Link>
                            </li>
                            <li className='navigation'>
                                <Link style={{textDecoration:"none",color:'white'}} to={'/profile/orders'}>four</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='main-section'>
                    {location.pathname==="/profile"&&
                        <>
                        <div className='profile-details'>
                        <h2>Profile deatils</h2>
                        <p>name:shivam</p>
                        <p>Email:shivamssoni6@gmial.com</p>
                        </div>
                        </>
                    }

                    {location.pathname==="profile/address"&&(
                        <Address/>
                    )}

                    {location.pathname==="profile/account"&&(
                        <Account/>
                    )}

                    {location.pathname==="profile/orders"&&(
                        <OrderDetails/>
                    )}
                     <Outlet/>
                </div>
            </div>
           
        </div>
    )
}

export default ProfileComponent
