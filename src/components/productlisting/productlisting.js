import React, { useEffect, useState } from 'react'
import './productlisting.css'
import { useParams } from 'react-router-dom'
import { useFilter } from '../../contexts/filter-context'
import * as productApi from '../../api/productApi'
import * as FilterHelper from '../../utils/helper'
import * as CategoriesAPis from '../../api/category'
import { useCart } from '../../contexts/cart-context'
import { useWishList } from '../../contexts/wishlist-context'
import { useGlobal } from '../../contexts/globalContext'

import { useCartActions } from '../../hooks/cartAction'
import { useWishActions } from '../../hooks/wishAction'

// import * as WishAPis from '../../api/wishlist'
// import * as CartApis from '../../api/cart'

import { Link } from 'react-router-dom'

import * as ActionTypes from '../../constants/actions'



// <!-- <script type="text/javascript">
// function removeFadeOut(el, speed) {
//     var second = speed / 1000 + "s";
//     el.addEventListener("click", function () {
//         el.parentElement.parentElement.parentElement.style.transition = `all ${second} ease-in`;
//         el.style.opacity = 0.5;
//         el.parentElement.parentElement.parentElement.style.transform = "translateX(200px)";
//         setTimeout(() => {
//             const alertContainer = el.parentElement.parentElement.parentElement;
//             alertContainer.remove();
//         }, speed);
//     });
// }

// removeFadeOut(document.querySelector(".action"), 2000);
// </script> -->




// use proxy object object for validation
// const person = {
//     name: "John Doe",
//     age: 42,
//     nationality: "American"
//   };
//Reflect.get() and Reflect.set()
//obj[prop] = value
//   const personProxy = new Proxy(person, {});

function ProductListing() {
    const [ifFilterclear, setIfFilterclear] = useState(false);
    const [selectedCategory, setSelectedCategoy] = useState(null)
    const [mainProductsss, setmainout] = useState(null);

    const { cartState } = useCart();
    const { filterState, dispatchFilter } = useFilter()
    const { wishState } = useWishList();
    const { globalStateProperties, setDynamicProperties } = useGlobal();

    const { postToCart } = useCartActions();
    const { addToWish, removeFromWish } = useWishActions();


    const { id } = useParams();


    useEffect(() => {
        fetchAllProduct();
    }, [])

    useEffect(() => {
        if (id) {
            CategoriesAPis?.getSingleCategory(id)?.then(res => {
                setSelectedCategoy(res?.data?.category);
            })
        }
    }, [id])

    useEffect(() => {
        if (selectedCategory && globalStateProperties?.productList) {
            let op = globalStateProperties?.productList?.filter(item => item?.categoryName === selectedCategory?.categoryName)
            setmainout(op)
        }
    }, [selectedCategory, globalStateProperties?.productList])


    const fetchAllProduct = async () => {
        const response = await productApi?.getProductList();
        await setDynamicProperties("productList", response?.data?.products)
    }

    const sortedByPrice = mainProductsss && FilterHelper?.SortbyPrice(mainProductsss, filterState?.minprice);
    const sortByCategory = sortedByPrice && FilterHelper?.sortByCategory(sortedByPrice, filterState?.filterCategory)
    const sortByOreder = sortByCategory && FilterHelper?.sortByOreder(sortByCategory, filterState?.sortBylth)
    const sortByRatings = sortByOreder && FilterHelper?.sortByRatings(sortByOreder, filterState?.minratings)

    const finalProducts = sortByRatings && sortByRatings;

    const handleAdddCart = async (e, proID) => {
        e.preventDefault();
        const protoaddd = mainProductsss?.find(item => item?.id === proID);
        await postToCart(protoaddd, () => {
            console.log('adding product in cart')
        })
    }

    // const handleAddToWish = async (e, proWId) => {
    //     e.preventDefault();
    //     const protoaddd = mainProductsss?.find(item => item?.id === proWId)
    //     await addToWish(protoaddd, () => {
    //         console.log('adding product to wishlist')
    //     })
    // }

    // wishlist operations

    const isProductInWishlist = async (e, product) => {
        const filteredproducts = wishState?.wishproducts?.filter(
            (product) => product._id === product?._id
        );
        return filteredproducts.length === 1;
    };


    const handleProductinwishlist = async (product) => {
        isProductInWishlist(product) ? await removeFromWish(product?._id) :await addToWish(product)
    }



    const clearAllFilter = () => {
        console.log('clear')
        setIfFilterclear(true)
    }

    return (
        <div>
            <div className='product-container'>
                <div className="parts">
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
                                    })
                                }}
                                className="slider" type="range" min="1" max="15000" step="500" />
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
                                    }}
                                        value={`shoes`} type="checkbox" className="form-input" id="pro0" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro0">shoes</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onClick={(e) => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.CATEGORY,
                                                payload: e.target
                                            })
                                        }}
                                        value={`jaket`} type="checkbox" className="form-input" id="pro1" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro1">jaket</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        onClick={(e) => {
                                            dispatchFilter({
                                                type: ActionTypes.Filter.CATEGORY,
                                                payload: e.target
                                            })
                                        }}
                                        value={`sliperss`} type="checkbox" className="form-input" id="pro2" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro2">sliperss</label>
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" className="form-input" id="pro3" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro3">models</label>
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" className="form-input" id="pro4" />
                                    <span className="check-style"></span>
                                    <label className="form-label" for="pro4">jackets</label>
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
                                        }}
                                        name='sort' type="radio" className="form-input" id="pro9" />
                                    <span className="radio-style"></span>
                                    <label className="form-label" for="pro9">price - high to low</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="parts-2">
                        <h2 className="part-2-head">Showing All Product</h2>

                        <div className="products">
                            {(mainProductsss && finalProducts) && (ifFilterclear ? mainProductsss : finalProducts)?.map((product, idx) => (
                                <div key={`pro${idx}`} class="product-card ecom-card0">
                                    <div class="img-container-product ecom-p0">
                                        <img class="p-img" alt="" src={product?.proImg} />
                                        <div class="badge">
                                            <input onChange={() => handleProductinwishlist(product)} className="heart" type="checkbox" />
                                            <label for="heart">❤</label>
                                        </div>
                                    </div>
                                    <div class="card-content-product">
                                        <h3 className="title0">{product?.title}</h3>
                                        <p className="price-p0">{`€ ${product?.price}`}</p>
                                        {cartState?.cartproducts?.find(item => item?._id === product?._id) ? <Link to={'/cart'} className="btn-product0 ecom-btn-cart">go to cart</Link> : <button onClick={e => handleAdddCart(e, product?.id)} className="btn-product0 ecom-btn-cart">add to cart</button>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListing
