import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useGlobal } from '../../../contexts/globalContext'
import { useCart } from '../../../contexts/cart-context';

import '../profile.css'

function Address() {
    const { setOpenModal, allAddress, setAllAddress } = useGlobal();
    const { cartState, dispatchCart } = useCart();

    const removethisAddress = async (username) => {
        if (allAddress) {
            const afterremove = allAddress?.filter((item) => item?.username !== username)
            await setAllAddress(afterremove);
        }
    }

    const handleSelectAddressClick = (addresuniqe) => {
        dispatchCart({ type: "SET_SELECTED_ADDRESS", payload: addresuniqe });
    };

    useEffect(() => {
        if (allAddress.length === 0) {
            dispatchCart({
                type: 'UNSET_SELECTED_ADDRESS',
            })
        }

        if (allAddress.length === 1) {
            dispatchCart({
                type: 'SET_SELECTED_ADDRESS',
                payload: allAddress[0]
            })
        }

    }, [allAddress.length])

    return (
        <div className='address-container'>
            <div className='tocart'>
                <Link to={'/cart'}>go to cart</Link>
            </div>
            <div className='addnew'>
                <button className='acc-log' onClick={() => setOpenModal(true)}>add new address</button>
            </div>

            <div className='address-sections'>
                {allAddress &&
                    allAddress.map((address, idx) => (
                        <div key={`${idx}`} className='adrs-box'>
                            <input onChange={() => handleSelectAddressClick(address)} type="radio" id="html" name="fav_address" value={address?.username} checked={allAddress?.length === 1 ? allAddress?.length === 1 : address?.username === cartState?.selectedAddress?.username} />
                            <label for="html">
                                <div className='adrs-label'>
                                    <p>name:{address?.username}</p>
                                    <p>area: {address.area}</p>
                                    <p>cityAndstate: {address?.cityAndstate}</p>
                                    <p>country: {address.country}</p>
                                    <p>housedetails:{address?.housedetails}</p>
                                    <p>mobile: {address.mobile}</p>
                                    <p>pincode: {address?.pincode}</p>
                                    <button onClick={() => removethisAddress(address?.username)}>remove</button>
                                    <button>edit</button>
                                </div>
                            </label>
                        </div>
                    )
                    )}
            </div>
        </div>
    )
}

export default Address
