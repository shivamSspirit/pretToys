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



function AllRoute() {
    // const [state, setState] = useState(true);

// //  const navigate = useNavigate();

// const ifauth = useAuth(localStorage.getItem('token'));

// console.log('fsdfssdfsdfsdfsdf',ifauth)
//     console.log(localStorage?.getItem('token'))

    return (
        <div>
            <Routes>
                {/* <Routes> */}
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/auth/login" element={<LoginPage />} />
                <Route exact path="/auth/signup" element={<SignupPage />} />
                <Route exact path="/products/:id" element={<ProductListingPage />} />

                <Route exact path="/wishlist" element={<AuthRoutes><WishlistPage /></AuthRoutes>} />
                <Route exact path="/cart" element={<AuthRoutes><CartPage /></AuthRoutes>} />
                
                <Route  path='/mockman' element={<Mockman/>} />
            </Routes>
{/* 
            {!ifauth&& <Navigate to={'/auth/login'} replace/>}
            {ifauth&& <Navigate to="/wishlist" replace />}  */}
        </div>
    )
}

export default AllRoute
