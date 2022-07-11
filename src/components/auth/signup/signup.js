import React, { useState } from 'react'
import './signup.css'
import * as AuthApis from '../../../api/authApi'
import { Link, useNavigate } from 'react-router-dom'
function Signup() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const handleUserSignup = (e) => {
        const val = e.target.name;
        if (val === 'username') {
            setUser({
                ...user, name: e.target.value
            })
        } if (val === 'email') {
            setUser({
                ...user, email: e.target.value
            })
        }
        if (val === 'pwd') {
            setUser({
                ...user, password: e.target.value
            })
        }
    }

    const handleSignSubmit = (e) => {
        e.preventDefault();
        const mainuser = { ...user };
        AuthApis?.signupHandler(mainuser).then(res => {
            console.log('res from sign up', res?.data?.createdUser)
        })
        navigate('/auth/login')
    }

    return (
        <div>
            <div className='signup-container'>
                <div className="forms">
                    <div className="single-input ecom-form">
                        <h3 className="head-form ecom-user">User Signup</h3>
                        <form id="my-form" onSubmit={handleSignSubmit}>
                            <div className="med">
                                <label className="label ecom-label" for="name"> Name </label>
                                <input value={user?.name} onChange={handleUserSignup} required className="input" type="text" name="username" />
                            </div>
                            <div className="med">
                                <label className="label ecom-label" for="Email"> Email </label>
                                <input value={user?.email} onChange={handleUserSignup} required className="input input-email" type="email" name="email" />
                                {/* <img className="form-icon form-icon-disable ecom-email" src="../../../images/svgs/email.svg"
                                    alt="email" /> */}
                            </div>

                            <div className="med">
                                <label className="label ecom-label" for="pwd"> Password </label>
                                <input value={user?.password} onChange={handleUserSignup} required className="input" type="text" name="pwd" />
                                {/* <img className="form-icon form-icon-warning ecom-warn" src="../../../images/svgs/error.svg"
                                    alt="number" /> */}
                            </div>
                            <div className="med login-btn-med">
                                <button className="btn log-btn" type="submit">Click</button>
                                <span className="redirect-signup">
                                    <Link className="ecom-login" to="/auth/login">Already have an Account </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
