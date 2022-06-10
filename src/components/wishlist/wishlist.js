import React, { useEffect, useState } from 'react'
import './wishlist.css'

import CloseIcon from '../../assest/images/svgs/close.svg'
import Jaket from '../../assest/images/jpeg/leather.jpg'

import * as ActionTypes from '../../constants/actions'
import * as WishApi from '../../api/wishlist'
import { useWishList } from '../../contexts/wishlist-context'
import { useGlobal } from '../../contexts/globalContext'


function Wishlist() {
    const { wishState, dispatchWish } = useWishList()
    const { globalStateProperties, setDynamicProperties } = useGlobal();


    useEffect(() => {
        WishApi?.getWishlist().then(async (res) => {
            await setDynamicProperties("wish", res?.data?.wishlist)
        })
    }, [])


    const handleRemove = async (proId) => {
        await WishApi?.removeFromWish(proId);

        await dispatchWish({
            type: ActionTypes?.Wislist?.REMOVE_FROM_WISH,
            payload: proId
        })
    }

    const MoveToCart = async (proId) => {

    }


    return (
        <>
            <div className="wish-container">
                <div className="wishes">
                    <h2 className="my-wish">My Wishlist</h2>
                    <div className="all-wishes">
                        {wishState.wishproducts && wishState.wishproducts?.map((product, idx) => (
                            <div key={`wish${idx}`} className="action-card">
                                <div className="img-container-product0 wish-strech">
                                    <img className="p-img0" alt="" src={Jaket} />
                                    <div className="badge1">
                                        <span onClick={() => handleRemove(product?.id)} className="action"><img src={CloseIcon}
                                            className="img-action" alt="" /></span>
                                    </div>
                                </div>
                                <div className="card-content-product0">
                                    <h3 className="title0">{product.title}</h3>
                                    <p className="price-p0">{product.price}</p>
                                    <button className="btn-product0 add-cl">Add To Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist
