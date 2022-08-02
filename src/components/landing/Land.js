import React, { useEffect } from 'react'
import './land.css'
import { useGlobal } from '../../contexts/globalContext'
import { useNavigate } from 'react-router-dom'

import appleImage from '../../assest/images/jpeg/apple-iphone-13.jpg'
import landImg from '../../assest/images/jpeg/land (1).jpg'

import * as CategoryApis from '../../api/category'
import { Link } from 'react-router-dom'

function Land() {

    const navigate = useNavigate()
    const { category, setCategory, currentCategory, setCurrentCategory } = useGlobal();

    useEffect(() => {
        CategoryApis?.getCategoryList().then(res => {
            setCategory(res?.data?.categories)
        })
    }, [])

    const movetoProductlisting = async (categoryID) => {
        const res = await CategoryApis?.getSingleCategory(categoryID);
        await setCurrentCategory(res?.data?.category?.categoryName);
        navigate('/products')
    }

    return (
        <div>
            <div className="landing-page">
                <div className="main-content">
                    <div className="land-img-container">
                        {/* <img className="land-img" alt="land" src={landImg} /> */}
                        <div className="overtoimg">
                            <p className="txt-0">Clearance Sale</p>
                            <p className="txt-0">50% OFF</p>
                            <Link to={'/products'} className="land-b">BROWSE PRODUCTS</Link>
                        </div>
                    </div>
                    <div className="main-sec-two">
                        <h2 className="sec-title">
                            Featured Categories
                        </h2>
                        <div className="sec-wrap">
                            {category && category.map((item, idx) => (
                                <div key={`cate${idx}`}>
                                    <div className="product-card-container">
                                        <div className="img-container-p">
                                            <img className="img-p" alt="" src={item?.imgthumbnail} />
                                        </div>
                                        <div className="card-content">
                                            <div className="colors">
                                                <div className="color"></div>
                                                <div className="color"></div>
                                                <div className="color"></div>
                                                <div className="color"></div>
                                            </div>
                                            <div className="content">
                                                <button onClick={() => movetoProductlisting(item?.id)} className="name btn">{item?.categoryName}</button>
                                                <p className="info">
                                                    {item?.description}
                                                </p>
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
