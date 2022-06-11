import React, { useState, useContext, useEffect } from 'react'
import './login.css'
import * as AuthApis from '../../../api/authApi'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/globalContext'
import { useGlobal } from '../../../contexts/globalContext'

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [logggedUser, setLoggedUSer] = useState(null);

    const navigate = useNavigate();
    const authContext = useAuth(logggedUser);
    const { setDynamicProperties } = useGlobal();


    useEffect(() => {
        if (authContext) {
            navigate('/')
        }
    }, [authContext])

    const handleUserLogin = (e) => {
        const val = e.target.name;
        if (val === 'email') {
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

    const handleLogSubmit = (e) => {
        e.preventDefault();
        const mainLog = { ...user };
        AuthApis?.LoginHandler(mainLog)?.then(async (res) => {
            setLoggedUSer(res?.data?.foundUser);
            await setDynamicProperties('currentUser', res?.data?.foundUser)
        });
    }


    return (
        <>
            <div class="login-container">
                <div className="forms">
                    <div className="single-input ecom-form">
                        <h3 className="head-form ecom-user">User Login</h3>
                        <form id="my-form" onSubmit={handleLogSubmit}>
                            <div className="med">
                                <label className="label ecom-label" for="Email"> Email </label>
                                <input required value={user?.email} onChange={handleUserLogin} className="input input-email" type="email" name="email" />
                                {/* <img className="form-icon form-icon-disable ecom-email" src="../../../images/svgs/email.svg"
                                    alt="email" /> */}
                            </div>
                            <div className="med">
                                <label className="label ecom-label" for="pwd"> Password </label>
                                <input value={user?.password} onChange={handleUserLogin} required className="input" type="text" name="pwd" />
                                {/* <img className="form-icon form-icon-warning ecom-warn" src="../../../images/svgs/error.svg"
                                    alt="number" /> */}
                            </div>
                            <div className="med login-btn-med">
                                <button className="btn log-btn" type="submit">Click</button>
                                <span className="redirect">
                                    <Link className="ecom-signup" to="/auth/signup">Create New Account</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
