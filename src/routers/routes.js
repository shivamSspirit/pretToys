import React, { useState } from 'react'
import CartPage from '../pages/cart-page'
import HomePage from '../pages/home-page'
import LoginPage from '../pages/login-page'
import ProductListingPage from '../pages/productlisting-page'
import SignupPage from '../pages/signup-page'
import WishlistPage from '../pages/wishlist-page'
import Mockman from 'mockman-js'

import AuthRoutes from './authRoutes'

// import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../contexts/globalContext'


import { Route, Routes } from "react-router-dom";
import CheckOutPage from '../pages/checkout'
import ProfilePage from '../pages/profile-page'
import Address from '../components/profilecomp/profilepages/address'
import OrderDetails from '../components/profilecomp/profilepages/order'
import Account from '../components/profilecomp/profilepages/account'
import { Helmet } from "react-helmet";


function AllRoute() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Toys</title>
            </Helmet>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/auth/login" element={<LoginPage />} />
                <Route exact path="/auth/signup" element={<SignupPage />} />
                <Route exact path="/products" element={<ProductListingPage />} />
                {/* <Route exact path='/timer' element={<Timer />} /> */}
                <Route exact path='/profile' element={<ProfilePage />}>
                    <Route path='address' element={<Address />} />
                    <Route path='orders' element={<OrderDetails />} />
                    <Route path='account' element={<Account />} />
                </Route>
                <Route exact path="/wishlist" element={<AuthRoutes><WishlistPage /></AuthRoutes>} />
                <Route exact path="/cart" element={<AuthRoutes><CartPage /></AuthRoutes>} />
                <Route path='/checkout' element={<AuthRoutes><CheckOutPage /></AuthRoutes>} />
                <Route path='/mockman' element={<Mockman />} />
            </Routes>
            {/* 
            {!ifauth&& <Navigate to={'/auth/login'} replace/>}
            {ifauth&& <Navigate to="/wishlist" replace />}  */}
        </div>
    )
}

export default AllRoute
