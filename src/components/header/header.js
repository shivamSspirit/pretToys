import React from 'react'
import './header.css'

import shoppingBag from '../../assest/images/jpeg/shopping-bag.png'
import heartIcon from '../../assest/images/jpeg/heart.png'
import userIcon from '../../assest/images/jpeg/user.png'
import headerIcon from '../../assest/images/svgs/toy.svg'
import searchIcon from '../../assest/images/jpeg/search.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context'

// by age
// by brand
// by category

function Header() {

    // const { globalStateProperties } = useGlobal()

    const { authToken } = useAuth()

    return (
        <div>
            <header>
                <div className="ecom-header">
                    <div className="icon-container">
                        <Link className="img-link" to="/">
                            <span>
                                <img className="icon" src={headerIcon} alt="" /> 
                            </span>
                        </Link>
                    </div>
                    <div className="ecom-nav">
                        <Link to={'#home'} className="nav-link">Home</Link>
                        <Link to={'#category'} className="nav-link">category</Link>
                        <Link to={'#age'} className="nav-link">age</Link>
                        <Link to={'#brand'} className="nav-link">brand</Link>
                    </div>
                    <div className="search-bar">
                        <input className="search" placeholder="Search for brands" type="text" name="search" />
                        {/* <img className="search-icon" src={searchIcon} alt="search" /> */}
                    </div>
                    <div className="socials-ecom">
                        <span className='admin-icon'>
                            <Link className='account-link' to="/auth/login">
                                <span className='user-name'>{authToken && 'shivam'}</span>
                                <img src={userIcon}
                                    className="social-icons" />
                            </Link>
                        </span>
                        <span>
                            <Link to="/wishlist">
                                <img src={heartIcon}
                                    className="social-icons" />
                            </Link>
                        </span>
                        <span>
                            <Link to="/cart">
                                <img src={shoppingBag} className="social-icons" />
                            </Link>
                        </span>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
