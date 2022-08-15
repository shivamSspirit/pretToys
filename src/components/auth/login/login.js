import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import * as AuthApis from '../../../api/authApi'
import { useAuth } from '../../../contexts/auth-context'
import useLoginForm from '../../../hooks/useforms/useLoginForm'
import './login.css'

function Login() {
    const navigate = useNavigate();
    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }
    const { values, errors, handleChange, asGuest } = useLoginForm(formLogin)
    const { setAuthToken } = useAuth();

    const handleSubmit = async (event) => {
        if (event) event.preventDefault();
        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            AuthApis?.LoginHandler({
                email: values.email,
                password: values.password
            }).then(res => {
                if (res) {
                    setAuthToken(res.data.encodedToken)
                    navigate('/')
                }
            })
        } else {
            alert("There is an Error!");
        }
    }

    return (
        <>
            <div class="login-container">
                <div className='log-contains'>
                    <div className="forms">
                        <div className="single-input ecom-form">
                            <h3 className="head-form ecom-user">User Login</h3>
                            <form id="my-form" onSubmit={handleSubmit}>
                                <div className="med">
                                    <label className="label ecom-label" for="Email"> Email </label>
                                    <input required value={values?.email} onChange={handleChange} className="input input-email" type="email" name="email" />
                                    {errors.email && <p className='login-error'>{errors.email}</p>}
                                </div>
                                <div className="med">
                                    <label className="label ecom-label" for="pwd"> Password </label>
                                    <input value={values?.password} onChange={handleChange} required className="input" type="text" name="pwd" />
                                    {errors.password && <p className='login-error'>{errors.password}</p>}
                                </div>
                                <div className="med login-btn-med">
                                    <button className="btn log-btn" type="submit">Click</button>
                                    <span className="redirect">
                                        <Link className="ecom-signup" to="/auth/signup">Create New Account</Link>
                                    </span>
                                </div>
                                <div className='med log-as-guest'>
                                    <button onClick={async (e) => await asGuest(e)} className='log-btn'>Login as Guest</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
