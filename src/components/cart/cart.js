import React, { useEffect, useState } from 'react'
import './cart.css'

import UserImg from '../../assest/images/jpeg/user.jpg'
import { useCart } from '../../contexts/cart-context';

function Cart() {
    const { cartState, dispatchCart } = useCart();

    useEffect(() => {
        if (cartState.cartproducts) {
            console.log('cartstate', cartState.cartproducts)
        }
    }, [cartState.cartproducts])

    return (
        <div>
            <div className="cart-container">
                <div>
                    <h2 className="my-cart">My cart(3)</h2>

                    <div className="cart-partition">

                        <div className="cart-products">
                            <div className="align-card">
                                {cartState.cartproducts && cartState.cartproducts?.map((item, idx) => (

                                    <div key={`c-card${idx}`} className="card-container-horizontal cart-pro">
                                        <div className="img-container-h">
                                            <img className="img-h" alt="" src={item.proImg} />
                                        </div>
                                        <div className="card-content">
                                            <div className="content-h">
                                                <div>
                                                    <p className="title-pro-cart">
                                                     {item.title}
                                                    </p>
                                                    <div className="iphone-price">
                                                        <p className="real-price">
                                                            {`Rs ${item.price}`}
                                                        </p>
                                                        <p className="dis-price">
                                                        {`Rs ${item.discount}`}
                                                        </p>
                                                        <p className="dis-per">
                                                            30%
                                                        </p>
                                                    </div>
                                                    <div className="quant">
                                                        <p className="quant-title">
                                                            Quantity :
                                                        </p>
                                                        <p className="symbol">-</p>
                                                        <p className="symbol">{item.quantity}</p>
                                                        <p className="symbol">+</p>
                                                    </div>
                                                    <div className="btns-cart">
                                                        <button className="cart-btns">Remove to cart</button>
                                                        <button className="cart-btns">Add to wishlist</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                        <div className="cart-price">

                            <div className="price-details">
                                <h3 className="p-detail-title">
                                    Price Details
                                </h3>
                                <br />
                                <div className="charges">
                                    <div className="row-prices">
                                        <p className="row-item">
                                            Price(2 items)
                                        </p>
                                        <p className="row-item1">
                                            Rs.545454
                                        </p>
                                    </div>
                                    <div className="row-prices">
                                        <p className="row-item">
                                            Discount
                                        </p>
                                        <p className="row-item1">
                                            Rs.54454
                                        </p>
                                    </div>
                                    <div className="row-prices">
                                        <p className="row-item">
                                            Delivery Charges
                                        </p>
                                        <p className="row-item1">
                                            Rs.5454
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div className="total">
                                    <p className="total-price">
                                        Total Amount
                                    </p>
                                    <p className="total-price1">
                                        Rs.4343444
                                    </p>
                                </div>
                                <br />
                                <button className="btn outline-primary cart-p-btn">Checkout</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
