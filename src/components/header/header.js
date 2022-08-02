import React, { useEffect, useState } from 'react'
import { useWishList } from '../../contexts/wishlist-context'
import { useCart } from '../../contexts/cart-context'
import './header.css'

import shoppingBag from '../../assest/images/jpeg/shopping-bag.png'
import heartIcon from '../../assest/images/jpeg/heart.png'
import userIcon from '../../assest/images/jpeg/user.png'
import headerIcon from '../../assest/images/svgs/toy.svg'
import searchIcon from '../../assest/images/jpeg/search.png'
import { Link } from 'react-router-dom'



// by age
// by brand
// by category

function Header() {

    const { wishState } = useWishList()
    const { cartState } = useCart()

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
                        <Link to={'/'} className="nav-link">Home</Link>
                        <Link to={'/products'} className="nav-link">shopnow</Link>
                    </div>
                    <div className="search-bar">
                        <input className="search" placeholder="Search for brands" type="text" name="search" />
                        {/* <img className="search-icon" src={searchIcon} alt="search" /> */}
                    </div>
                    <div className="socials-ecom">
                        <span className='admin-icon'>
                            <Link className='account-link' to="/profile">
                                <span className='user-name'>{localStorage.getItem("authUser") ? localStorage.getItem("authUser") : 'creater'}</span>
                                <img src={userIcon}
                                    className="social-icons" />
                            </Link>
                        </span>
                        <span>
                            <Link to="/wishlist">
                                <img src={heartIcon}
                                    className="social-icons" />
                                    <span className='badgeswish'>{wishState?.wishCount}</span>
                            </Link>
                        </span>
                        <span>
                            <Link to="/cart">
                                <img src={shoppingBag} className="social-icons" />
                                <span className='badgesbag'>{cartState?.totalCartItems}</span>
                            </Link>
                        </span>
                        {/* <span>

                        </span> */}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
