import React from 'react'

import { Link } from 'react-router-dom'
import { useWishList } from '../../contexts/wishlist-context'
import { useCart } from '../../contexts/cart-context'
import { useGlobal } from '../../contexts/globalContext'
import './header.css'


import shoppingBag from '../../assest/images/jpeg/shopping-bag.png'
import heartIcon from '../../assest/images/jpeg/heart.png'
import userIcon from '../../assest/images/jpeg/user.png'
import headerIcon from '../../assest/images/svgs/toy.svg'

function Header() {

    const { wishState } = useWishList()
    const { cartState } = useCart()
    const {searchquery,handlesearchChange} = useGlobal()

   
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
                        <Link to={'/products'} className="nav-link">Shopnow</Link>
                    </div>
                    <div className="search-bar">
                        <input value={searchquery} onChange={handlesearchChange} className="search" placeholder="Search for brands" type="text" name="search" />
                    </div>
                    <div className="socials-ecom">
                        <span className='admin-icon'>
                            <Link className='account-link' to="/profile">
                                <span className='user-name'>{localStorage.getItem("authUser") ? localStorage.getItem("authUser") : 'Creater'}</span>
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
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
