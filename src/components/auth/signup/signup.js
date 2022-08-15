import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './signup.css'
import * as AuthApis from '../../../api/authApi'
import useSignupForm from '../../../hooks/useforms/useSignup'


function Signup() {

    const navigate = useNavigate()

    const formSignup = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }

    const { values, errors, handleChange } = useSignupForm(formSignup)

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            AuthApis.signupHandler({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            }).then(res => {
                console.log('res from sign up', res)
            })
            navigate('/auth/login')
        } else {
            alert("There is an Error!");
        }
    }

    return (
        <div>
            <div className='signup-container'>
                <div className="forms">
                    <div className="single-input ecom-form">
                        <h3 className="head-form ecom-user">User Signup</h3>
                        <form id="my-form" onSubmit={handleSubmit}>

                            <div className="med">
                                <label className="label ecom-label" for="name"> FirstName </label>
                                <input value={values?.firstName} onChange={handleChange} required className="input" type="text" name="firstname" />
                                {errors.firstName && <p className='signup-error'>{errors.firstName}</p>}
                            </div>

                            <div className="med">
                                <label className="label ecom-label" for="name"> LastName </label>
                                <input value={values?.lastName} onChange={handleChange} required className="input" type="text" name="lastname" />
                                {errors.lastName && <p className='signup-error'>{errors.lastName}</p>}
                            </div>

                            <div className="med">
                                <label className="label ecom-label" for="Email"> Email </label>
                                <input value={values?.email} onChange={handleChange} required className="input input-email" type="email" name="email" />
                                {errors.email && <p className='signup-error'>{errors.email}</p>}
                                {/* <img className="form-icon form-icon-disable ecom-email" src="../../../images/svgs/email.svg"
                                    alt="email" /> */}
                            </div>

                            <div className="med">
                                <label className="label ecom-label" for="pwd"> Password </label>
                                <input value={values?.password} onChange={handleChange} required className="input" type="text" name="pwd" />
                                {errors.password && <p className='signup-error'>{errors.password}</p>}
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
