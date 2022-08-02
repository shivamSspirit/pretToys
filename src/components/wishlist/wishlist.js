import React, { useEffect } from 'react'
import './wishlist.css'

import { Link } from 'react-router-dom'

import CloseIcon from '../../assest/images/svgs/close.svg'
import Jaket from '../../assest/images/jpeg/leather.jpg'

import { useWishList } from '../../contexts/wishlist-context'
import { useWishActions } from '../../hooks/wishAction'
import { useCartActions } from '../../hooks/cartAction'

import { useCart } from '../../contexts/cart-context'


function Wishlist() {
    const { wishState } = useWishList()
    const { getWish, removeFromWish } = useWishActions()
    const { postToCart } = useCartActions()
    const {cartState} = useCart()

    useEffect(() => {
        getWish(() => {
            console.log('getting wishlist')
        })
    }, [])


    const handleRemove = async (proId) => {
        await removeFromWish(proId, () => {
            console.log('removing from wishlist')
        })
    }

    const movetoCart = async (product) => {
        await postToCart(product, () => {
            console.log('posting to cart')
        })
    }

    return (
        <>
       
        <div className="wish-container">
                <div className="wishes">
                    <h2 className="my-wish">My Wishlist</h2>
                    <div className="all-wishes">
                        {wishState?.wishproducts && wishState?.wishproducts?.map((product, idx) => (
                            <div key={`wish${idx}`} className="action-card">
                                <div className="img-container-product0 wish-strech">
                                    <img className="p-img0" alt="" src={product?.proImg} />
                                    <div className="badge1">
                                        <span onClick={() => handleRemove(product?._id)} className="action"><img src={CloseIcon}
                                            className="img-action" alt="" /></span>
                                    </div>
                                </div>
                                <div className="card-content-product0">
                                    <h3 className="title0">{product.title}</h3>
                                    <p className="price-p0">{product.price}</p>
                                    {cartState?.cartproducts?.find(item => item?._id === product?._id) ? <Link to={'/cart'} className="btn-product0 ecom-btn-cart">go to cart</Link> : <button onClick={() => movetoCart(product)} className="btn-product0 ecom-btn-cart">add to cart</button>}
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
