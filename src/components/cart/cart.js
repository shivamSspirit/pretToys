import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as cartActions from '../../constants/actions'

import './cart.css'
import { useCartActions } from '../../hooks/cartAction'
import { useWishActions } from '../../hooks/wishAction'
import { useCart } from '../../contexts/cart-context';


function Cart() {
    const { cartState } = useCart();
    const { addToWish } = useWishActions();
    const { removeFromCart, updateExistingProduct } = useCartActions();
    const { dispatchCart } = useCart();
    const [currnstate, setcurrstate] = useState();


    const removeItemFromCart = async (productId) => {
        await removeFromCart(productId, () => {
            console.log('remove product with all its quantity')
        });
    }

    useEffect(() => {
        if (cartState?.selectedAddress) {
            setcurrstate(cartState?.selectedAddress)
        }
    }, [cartState?.selectedAddress])

    const moveToWish = async (product) => {
        await addToWish(product, () => {
            console.log("adding product to wishlist")
        })
        await removeItemFromCart(product?._id);
    }

    const updateProductqty = async (productId, type, product) => {
        if (type === "increment") {
            const actionInc = { action: { type: type } }
            await updateExistingProduct(productId, actionInc, product)
        }
        if (type === 'decrement') {
            const actionDec = { action: { type: type } }
            await updateExistingProduct(productId, actionDec, product)
        }
    }

    const navigate = useNavigate()

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            document.body.appendChild(script);
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
        });
    };



    const displayRazorpay = async () => {
        const respose = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!respose) {
            return;
        }

        const options = {
            key: "rzp_test_fWRvPNz4kh1YTV",
            amount: 100,
            currency: "INR",
            name: "Pret toys",
            description: "Enjoy the products & thanks for shopping with us.",

            handler: ({ razorpay_payment_id }) => {
                console.log("razpaerpayisd", razorpay_payment_id)

                if (razorpay_payment_id) {
                    dispatchCart({
                        type: "ADD_TO_CART",
                        payload: []
                    })
                    dispatchCart({
                        type:cartActions?.Cart?.ADD_TO_ORDERS,
                        payload:razorpay_payment_id
                    })
                }
                navigate("/profile/orders");
            },
            prefill: {
                name: 'shivam',
                email: 'shivamssoni6@gmail.com',
                contact: "9988776655",
            },
            theme: {
                color: "#302f34",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", () => {
            console.log("error", "Payment failed, please try again.")
        });
    };


    return (
        <div style={{ height: "100%" }}>
            {cartState?.cartproducts?.length > 0 ? (

                <div className="cart-container">
                    <div>
                        <h2 className="my-cart">My cart({cartState?.cartproducts?.length ? cartState?.cartproducts?.length : 0})</h2>
                        <div className="cart-partition">
                            <div className="cart-products">
                                <div className="align-card">
                                    {cartState?.cartproducts && cartState?.cartproducts?.map((item, idx) => (
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
                                                            {item?.qty === 1 ? <p onClick={() => removeItemFromCart(item?._id)} className="symbol">!r</p> :
                                                                <p onClick={() => updateProductqty(item?._id, "decrement", item)} className="symbol">-</p>}
                                                            <p className="symbol">{item?.qty}</p>
                                                            <p onClick={() => updateProductqty(item?._id, "increment", item)} className="symbol">+</p>
                                                        </div>
                                                        <div className="btns-cart">
                                                            <button onClick={() => removeItemFromCart(item?._id)} className="cart-btns">Remove to cart</button>
                                                            <button onClick={() => moveToWish(item)} className="cart-btns">Add to wishlist</button>
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
                                    <div className='small-address-section'>
                                        {!currnstate && <Link to={'/profile/address'} style={{ textDecoration: "none", color: "inherit" }}>please select a address</Link>}
                                        {currnstate && <>
                                            <div className='link-sec'>
                                                <Link to={'/profile/address'} style={{ textDecoration: "none" }}>Go to Address</Link>
                                            </div>
                                            <div className='selected-adrs'>
                                                <span>{currnstate?.housedetails}</span>
                                                <span>{currnstate?.cityAndstate}</span>
                                                <span>{currnstate?.country}</span>
                                                <span>{currnstate?.pincode}</span>
                                                <span>{currnstate?.mobile}</span>
                                            </div>
                                        </>}
                                    </div>
                                    <h3 className="p-detail-title">
                                        Price Details
                                    </h3>
                                    <br />
                                    <div className="charges">
                                        <div className="row-prices">
                                            <p className="row-item">
                                                Price({`${cartState?.cartproducts?.length}`} items)
                                            </p>
                                            <p className="row-item1">
                                                {`Rs.${cartState?.totalMoney}`}
                                            </p>
                                        </div>
                                        <div className="row-prices">
                                            <p className="row-item">
                                                Delivery Charges
                                            </p>
                                            <p className="row-item1">
                                                {`Rs.${cartState?.deleveryCharges}`}
                                            </p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="total">
                                        <p className="total-price">
                                            Total Amount
                                        </p>
                                        <p className="total-price1">
                                            {`Rs.${(Number(cartState?.totalMoney)) + (Number(cartState?.deleveryCharges))}`}
                                        </p>
                                    </div>
                                    <br />

                                    <button disabled={!cartState?.selectedAddress} onClick={() => displayRazorpay()} style={{ opacity: `${!cartState?.selectedAddress ? "0.5" : "1"}` }} className="btn outline-primary cart-p-btn">Checkout</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    not added products yet pls do shooping with this <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/products'}>shooping</Link>
                </div>
            )
            }
        </div>
    )
}

export default Cart
