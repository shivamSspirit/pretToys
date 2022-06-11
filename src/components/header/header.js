import React, { useEffect, useState } from 'react'
import './header.css'

import shoppingBag from '../../assest/images/jpeg/shopping-bag.png'
import heartIcon from '../../assest/images/jpeg/heart.png'
import userIcon from '../../assest/images/jpeg/user.png'
import headerIcon from '../../assest/images/jpeg/headicon.png'
import searchIcon from '../../assest/images/jpeg/search.png'
import { Link } from 'react-router-dom'
import { useGlobal } from '../../contexts/globalContext'

function Header() {

    const { globalStateProperties } = useGlobal()
    const [showLog, setShowLog] = useState(false)

    useEffect(() => {
        if (globalStateProperties?.currentUser) {
            setShowLog(true)
        }
    }, [globalStateProperties?.currentUser])


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
                        <Link to={'#heloo'} className="nav-link">Home</Link>
                        <Link to={'#heloo'} className="nav-link">Men</Link>
                        <Link to={'#heloo'} className="nav-link">Women</Link>
                        <Link to={'#heloo'} className="nav-link">Beauty</Link>
                    </div>
                    <div className="search-bar">
                        <input className="search" placeholder="Search for brands" type="text" name="search" />
                        <img className="search-icon" src={searchIcon} alt="search" />
                    </div>
                    <div className="socials-ecom">
                        <span>
                            <Link to="/auth/login">
                                <span>{showLog && 'Logoutnow'}</span>
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
