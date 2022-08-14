import { useState } from 'react'
import { omit } from 'lodash';

const useLoginForm = (Callback) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const Validate = (event, name, value) => {
        //A function to validate each input values
        switch (name) {

            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                } else {

                    let newObj = omit(errors, "email");
                    setErrors(newObj);

                }
                break;

            case 'pwd':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);

                }
                break;

            default:
                break;
        }
    }

    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();
        let name = event.target.name;
        let val = event.target.value;
        Validate(event, name, val);
        //Let's set these values in state

        if (name === "email") {
            setValues({
                ...values,
                email: val
            })
        }
        if (name === "pwd") {
            setValues({
                ...values,
                password: val
            })
        }
    }

    const asGuest = (e) => {
        e.preventDefault();
        console.log('login as guest')
        setValues({
            email: "shivam@gmail.com".trim(),
            password: "Pret@spirit3".trim()
        });
        setErrors({});
    }

    return {
        values,
        errors,
        handleChange,
        asGuest
    }
}

export default useLoginForm
