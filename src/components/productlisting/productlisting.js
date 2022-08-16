import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './productlisting.css'
import HeartIcon from '../../assest/images/svgs/blank.svg'
import FilledIcon from '../../assest/images/svgs/filled.svg'

import * as ActionTypes from '../../constants/actions'
import * as productApi from '../../api/productApi'
import * as FilterHelper from '../../utils/helper'


import { useCart } from '../../contexts/cart-context'
import { useWishList } from '../../contexts/wishlist-context'
import { useGlobal } from '../../contexts/globalContext'
import { useFilter } from '../../contexts/filter-context'
import { useCartActions } from '../../hooks/cartAction'
import { useWishActions } from '../../hooks/wishAction'

import Loader from '../loader/Loader'


function ProductListing() {

    const [ifFilterclear, setIfFilterclear] = useState(false);
    const [mainProductsss, setmainout] = useState(null);

    const { cartState } = useCart();
    const { filterState, dispatchFilter } = useFilter()
    const { wishState } = useWishList();
    const { allproducts, setLoader, dispatchAllproducts, currentCategory, setCurrentCategory, slideToggle, setSlideToggle, loader } = useGlobal();
    const { postToCart } = useCartActions();
    const { addToWish, removeFromWish } = useWishActions();

    let slidevisi = 'hide'

    if (slideToggle) {
        slidevisi = 'show'
    }
    useEffect(() => {
        fetchAllProduct();
    }, [])

    useEffect(() => {
        if (currentCategory && allproducts?.products) {
            let op = allproducts?.products?.filter(item => item?.categoryName === currentCategory)
            setmainout(op)
        }
    }, [currentCategory, allproducts?.products, ifFilterclear])

    const fetchAllProduct = async () => {
        setLoader(true);
        const response = await productApi?.getProductList();
        await dispatchAllproducts({
            type: "ADD_TO_PRODUCTS",
            payload: response?.data?.products
        })
        setLoader(false)
    }

    const sortedByPrice = mainProductsss && FilterHelper?.SortbyPrice(mainProductsss, filterState?.minprice);
    const sortByCategory = sortedByPrice && FilterHelper?.sortByCategory(sortedByPrice, filterState?.filterCategory)
    const sortByOreder = sortByCategory && FilterHelper?.sortByOreder(sortByCategory, filterState?.sortBylth)
    const sortByRatings = sortByOreder && FilterHelper?.sortByRatings(sortByOreder, filterState?.minratings)
    const finalProducts = sortByRatings && sortByRatings;


    const handleAdddCart = async (e, product) => {
        e.preventDefault();
        await postToCart(product, () => {
            console.log('adding product in cart')
        })
    }

    const clearAllFilter = () => {
        console.log('clear')
        setIfFilterclear(true);
        setCurrentCategory('');
    }


    return (
        <div>
            <div className='filter-btn'>
                <button className='open-up' onClick={() => setSlideToggle(!slideToggle)}>open up</button>
            </div>
            <div className='product-container'>

                <div onMouseUp={() => setSlideToggle(!slideToggle)} id="flyoutMenu"
                    className={slidevisi}>
                    <div className='in-slide'>
                        <div className="head-title">
                            <h2 className="filter">Filter</h2>
                            <p onClick={clearAllFilter} className="clear">Clear All</p>
                        </div>

                        <div className="range-slide">
                            <h3 className="price">Price</h3>
                            <input
                                onChange={(e) => {
                                    dispatchFilter({
                                        type: ActionTypes.Filter.MIN_PRICE,
                                        payload: e.target.value
                                    });
                                    setIfFilterclear(false);
                                }}
                                className="slider" type="range" min="4000" max="10000" step="300" />
                        </div>

                        <div className="category">
                            <h3 className="price">Category</h3>
                            <div className="checks-ecom">

                                <div className="form-group">
                                    <input onClick={(e) => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.CATEGORY,
                                            payload: e.target
                                        })
                                        setCurrentCategory(e.target.value)
                                        setIfFilterclear(false);
                                    }}
                                        checked={currentCategory === 'creativity'} value={`creativity`} type="checkbox" className="form-input" id="pro0" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro0">creativity</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onClick={(e) => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.CATEGORY,
                                                payload: e.target
                                            })
                                            setCurrentCategory(e.target.value)
                                            setIfFilterclear(false);
                                        }
                                        }
                                        checked={currentCategory === 'premium'} value={`premium`} type="checkbox" className="form-input" id="pro1" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro1">premium</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onClick={(e) => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.CATEGORY,
                                                payload: e.target
                                            })
                                            setCurrentCategory(e.target.value)
                                            setIfFilterclear(false);
                                        }}
                                        checked={currentCategory === 'expensive'} value={`expensive`} type="checkbox" className="form-input" id="pro2" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro2">expensive</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onClick={(e) => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.CATEGORY,
                                                payload: e.target
                                            })
                                            setCurrentCategory(e.target.value)
                                            setIfFilterclear(false);
                                        }}
                                        checked={currentCategory === 'trucktoys'}
                                        type="checkbox" className="form-input" id="pro3" value={`trucktoys`} />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro3">trucktoys</label>
                                </div>

                            </div>

                        </div>
                        <div className="ratings">
                            <h3 className="price">Ratings</h3>
                            <div className="radio-ecom">

                                <div className="form-group">
                                    <input type="radio" name='rating' onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.RATINGS,
                                            payload: e.target.value
                                        })
                                        setIfFilterclear(false);
                                    }} value={5} className="form-input" id="pro4" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro4">4 stars & above</label>
                                </div>

                                <div className="form-group">
                                    <input type="radio" name='rating' onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.RATINGS,
                                            payload: e.target.value
                                        })
                                        setIfFilterclear(false);
                                    }} value={4} className="form-input" id="pro5" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro5">3 stars & above</label>
                                </div>

                                <div className="form-group">
                                    <input value={3} type="radio" name='rating' onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.RATINGS,
                                            payload: e.target.value
                                        })
                                        setIfFilterclear(false);
                                    }} className="form-input" id="pro6" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro6">2 stars & above</label>
                                </div>

                                <div className="form-group">
                                    <input value={2} type="radio" name='rating' onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.RATINGS,
                                            payload: e.target.value
                                        })
                                        setIfFilterclear(false);
                                    }} className="form-input" id="pro7" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro7">1 stars & above</label>
                                </div>
                            </div>
                        </div>

                        <div className="sortby">
                            <h3 className="price">Sortby</h3>
                            <div className="sortby-ecom">

                                <div className="form-group">
                                    <input onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.LOW_TO_HIGH,
                                            payload: 'LOW_TO_HIGH'
                                        })
                                        setIfFilterclear(false);
                                    }} name='sort' type="radio" className="form-input" id="pro8" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro8">price - low to high</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onChange={e => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.HIGH_TO_LOW,
                                                payload: 'HIGH_TO_LOW'
                                            })
                                            setIfFilterclear(false);
                                        }}
                                        name='sort' type="radio" className="form-input" id="pro9" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro9">price - high to low</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>

                <div className="parts">
                    {/**side bar as part 1 start here */}
                    <div className="parts-1">
                        <div className="head-title">
                            <h2 className="filter">Filter</h2>
                            <p onClick={clearAllFilter} className="clear">Clear All</p>
                        </div>

                        <div className="range-slide">
                            <h3 className="price">Price</h3>
                            <input
                                onChange={(e) => {
                                    dispatchFilter({
                                        type: ActionTypes.Filter.MIN_PRICE,
                                        payload: e.target.value
                                    });
                                    setIfFilterclear(false);
                                }}
                                className="slider" type="range" min="4000" max="10000" step="300" />
                        </div>

                        <div className="category">
                            <h3 className="price">Category</h3>
                            <div className="checks-ecom">

                                <div className="form-group">
                                    <input onClick={(e) => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.CATEGORY,
                                            payload: e.target
                                        })
                                        setCurrentCategory(e.target.value)
                                        setIfFilterclear(false);
                                    }}
                                        checked={currentCategory === 'creativity'} value={`creativity`} type="checkbox" className="form-input" id="pro0" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro0">creativity</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onClick={(e) => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.CATEGORY,
                                                payload: e.target
                                            })
                                            setCurrentCategory(e.target.value)
                                            setIfFilterclear(false);
                                        }
                                        }
                                        checked={currentCategory === 'premium'} value={`premium`} type="checkbox" className="form-input" id="pro1" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro1">premium</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onClick={(e) => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.CATEGORY,
                                                payload: e.target
                                            })
                                            setCurrentCategory(e.target.value)
                                            setIfFilterclear(false);
                                        }}
                                        checked={currentCategory === 'expensive'} value={`expensive`} type="checkbox" className="form-input" id="pro2" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro2">expensive</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onClick={(e) => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.CATEGORY,
                                                payload: e.target
                                            })
                                            setCurrentCategory(e.target.value)
                                            setIfFilterclear(false);
                                        }}
                                        checked={currentCategory === 'trucktoys'}
                                        type="checkbox" className="form-input" id="pro3" value={`trucktoys`} />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro3">trucktoys</label>
                                </div>

                            </div>

                        </div>
                        <div className="ratings">
                            <h3 className="price">Ratings</h3>
                            <div className="radio-ecom">

                                <div className="form-group">
                                    <input type="radio" name='rating' onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.RATINGS,
                                            payload: e.target.value
                                        })
                                        setIfFilterclear(false);
                                    }} value={5} className="form-input" id="pro4" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro4">4 stars & above</label>
                                </div>

                                <div className="form-group">
                                    <input type="radio" name='rating' onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.RATINGS,
                                            payload: e.target.value
                                        })
                                        setIfFilterclear(false);
                                    }} value={4} className="form-input" id="pro5" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro5">3 stars & above</label>
                                </div>

                                <div className="form-group">
                                    <input value={3} type="radio" name='rating' onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.RATINGS,
                                            payload: e.target.value
                                        })
                                        setIfFilterclear(false);
                                    }} className="form-input" id="pro6" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro6">2 stars & above</label>
                                </div>

                                <div className="form-group">
                                    <input value={2} type="radio" name='rating' onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.RATINGS,
                                            payload: e.target.value
                                        })
                                        setIfFilterclear(false);
                                    }} className="form-input" id="pro7" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro7">1 stars & above</label>
                                </div>
                            </div>
                        </div>

                        <div className="sortby">
                            <h3 className="price">Sortby</h3>
                            <div className="sortby-ecom">

                                <div className="form-group">
                                    <input onChange={e => {
                                        dispatchFilter({
                                            type: ActionTypes.Filter.LOW_TO_HIGH,
                                            payload: 'LOW_TO_HIGH'
                                        })
                                        setIfFilterclear(false);
                                    }} name='sort' type="radio" className="form-input" id="pro8" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro8">price - low to high</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onChange={e => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.HIGH_TO_LOW,
                                                payload: 'HIGH_TO_LOW'
                                            })
                                            setIfFilterclear(false);
                                        }}
                                        name='sort' type="radio" className="form-input" id="pro9" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro9">price - high to low</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**filters are ending here */}
                    <div className="parts-2">
                        <h2 className="part-2-head">Showing All Product</h2>
                        {loader ? <Loader /> : (

                            <div className="products">
                                {allproducts?.products && ((currentCategory && !ifFilterclear) ? finalProducts : allproducts?.products)?.map((product, idx) => (
                                    <div key={`pro${idx}`} class="product-card ecom-card0">
                                        <div class="img-container-product ecom-p0">
                                            <img class="p-img" alt="" src={product?.proImg} />
                                            <div class="badge newbadge">
                                                <span>
                                                    {wishState?.wishproducts?.find(item => item?._id === product?._id) ? <img onClick={() => removeFromWish(product?._id)} className='hert' src={FilledIcon} alt='heart' /> : <img onClick={() => addToWish(product)} className='hert' src={HeartIcon} alt='heart' />}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-content-product more-margin">
                                            <h3 className="title0 m-title">{product?.title}</h3>
                                            <p className="price-p0">{`€ ${product?.price}`}</p>
                                            {cartState?.cartproducts?.find(item => item?._id === product?._id) ? <Link to={'/cart'} className="btn-product0 ecom-btn-cart">go to cart</Link> : <button onClick={e => handleAdddCart(e, product)} className="btn-product0 ecom-btn-cart">add to cart</button>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* <ToastContainer /> */}
        </div>
    )
}

export default ProductListing
