import React from 'react'
import './cart.css'

import { useCartActions } from '../../hooks/cartAction'
import { useWishActions } from '../../hooks/wishAction'
import { useCart } from '../../contexts/cart-context';

function Cart() {
    const { cartState } = useCart();
    const { addToWish } = useWishActions()
    const { removeFromCart, updateExistingProduct } = useCartActions();

    const removeItemFromCart = async (productId) => {
        await removeFromCart(productId, () => {
            console.log('remove product with all its quantity')
        });
    }

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

    return (
        <div>
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
