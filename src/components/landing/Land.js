import React, { useEffect } from 'react'
import './land.css'
import { useGlobal } from '../../contexts/globalContext'

import appleImage from '../../assest/images/jpeg/apple-iphone-13.jpg'
import landImg from '../../assest/images/jpeg/land (1).jpg'

import * as CategoryApis from '../../api/category'
import { Link } from 'react-router-dom'

function Land() {
 
    const {	globalStateProperties,setDynamicProperties} = useGlobal();

    useEffect(() => {
        CategoryApis?.getCategoryList().then(res => {
            setDynamicProperties('gVideoCategory',res?.data?.categories)
        })
    }, [])

    return (
        <div>
            <div className="landing-page">
                <div className="main-content">
                    <div className="land-img-container">
                        <img className="land-img" alt="land" src={landImg} />
                        <div className="overtoimg">
                            <p className="txt-0">Clearance Sale</p>
                            <p className="txt-0">50% OFF</p>
                            <Link to="#all-product" className="btn btn-primary land-b">BROWSE PRODUCTS</Link>
                        </div>
                    </div>
                    <div className="main-sec-two">
                        <h2 className="sec-title">
                            Featured Categories
                        </h2>
                        <div className="sec-wrap">
                            {globalStateProperties?.gVideoCategory && globalStateProperties?.gVideoCategory.map((item, idx) => (
                                <div key={`cate${idx}`}>
                                    <div className="product-card-container">
                                        <div className="img-container-p">
                                            <img className="img-p" alt="" src={appleImage} />
                                        </div>
                                        <div className="card-content">
                                            <div className="colors">
                                                <div className="color"></div>
                                                <div className="color"></div>
                                                <div className="color"></div>
                                                <div className="color"></div>
                                            </div>
                                            <div className="content">
                                                {/* <p className="status">New</p> */}
                                                <Link to={`/products/${item?.id}`} className="name">{item?.categoryName}</Link>
                                                <p style={{
                                                      whiteSpace: 'nowrap', 
                                                      overflow: 'hidden',
                                                      textOverflow: 'ellipsis'
                                                }} className="info">
                                                  {item?.description}
                                                </p>
                                                {/* <p className="price">From 1lack</p> */}
                                                <button className="btn">Buy</button>
                                            </div>
                                        </div>
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

export default Land
