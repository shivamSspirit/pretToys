import { useState } from 'react'
import { omit } from 'lodash';

const useAddressForm = (Callback) => {
    const [values, setValues] = useState({
        country: '',
        username: '',
        mobile: 0,
        pincode: 0,
        housedetails: '',
        area: '',
        cityAndstate: ''
    });
    const [errors, setErrors] = useState({});

    const Validate = (event, name, value) => {
        //A function to validate each input values
        switch (name) {

            case 'country':
                if (
                    !new RegExp("\/[a-zA-Z]{2,}\/").test(value)
                ) {
                    setErrors({
                        ...errors,
                        country: 'choose a valid country name'
                    })
                } else {

                    let newObj = omit(errors, "country");
                    setErrors(newObj);

                }
                break;

            case 'username':
                if (
                    !new RegExp("[a - zA - Z0 - 9]").test(value)
                ) {
                    setErrors({
                        ...errors,
                        username: 'name should be alphanumeric'
                    })
                } else {

                    let newObj = omit(errors, "username");
                    setErrors(newObj);

                }
                break;

            case 'mobile':

                if (
                    !new RegExp("/^([+]\d{2}[ ])?\d{10}$/").test(value)
                ) {
                    setErrors({
                        ...errors,
                        mobile: 'mobile number are not correct'
                    })
                } else {

                    let newObj = omit(errors, "mobile");
                    setErrors(newObj);

                }
                break;

            case 'pincode':

                if (
                    !new RegExp("[a - zA - Z0 - 9]").test(value)
                ) {
                    setErrors({
                        ...errors,
                        pincode: 'pincode should be alphanumeric'
                    })
                } else {

                    let newObj = omit(errors, "pincode");
                    setErrors(newObj);

                }
                break;

            case 'housedetails':

                if (
                    !new RegExp("[a - zA - Z0 - 9]").test(value)
                ) {
                    setErrors({
                        ...errors,
                        housedetails: 'housedetails should be alphanumeric'
                    })
                } else {

                    let newObj = omit(errors, "housedetails");
                    setErrors(newObj);

                }
                break;

            case 'area':


                if (
                    !new RegExp("[a - zA - Z0 - 9]").test(value)
                ) {
                    setErrors({
                        ...errors,
                        area: 'area should be alphanumeric'
                    })
                } else {

                    let newObj = omit(errors, "area");
                    setErrors(newObj);

                }
                break;

            case 'cityAndstate':

                if (
                    !new RegExp("[a - zA - Z0 - 9]").test(value)
                ) {
                    setErrors({
                        ...errors,
                        cityAndstate: 'cityAndstate should be alphanumeric'
                    })
                } else {

                    let newObj = omit(errors, "cityAndstate");
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

        if (name === "country") {
            setValues({
                ...values,
                country: val
            })
        }
        if (name === "username") {
            setValues({
                ...values,
                username: val
            })
        }
        if (name === "mobile") {
            setValues({
                ...values,
                mobile: val
            })
        }

        if (name === "pincode") {
            setValues({
                ...values,
                pincode: val
            })
        }
        if (name === "housedetails") {
            setValues({
                ...values,
                housedetails: val
            })
        }
        if (name === "area") {
            setValues({
                ...values,
                area: val
            })
        }
        if (name === "cityAndstate") {
            setValues({
                ...values,
                cityAndstate: val
            })
        }
    }

    const asFillDummy = (e) => {
        e.preventDefault();
        console.log('fill dummy addresss as guest')
        setValues({
            country: 'india',
            username: 'shivamji',
            mobile: 9660591317,
            pincode: 34535,
            housedetails: 'this is dalhouse',
            area: 'nikonnns',
            cityAndstate: 'brhma'
        });
        setErrors({});
    }

    const onCancel=(e)=>{
        e.preventDefault();
        setValues({
            country: '',
            username: '',
            mobile: 0,
            pincode: 0,
            housedetails: '',
            area: '',
            cityAndstate: ''
        })
    }

    return {
        values,
        errors,
        handleChange,
        asFillDummy,
        onCancel
    }
}

export default useAddressForm
