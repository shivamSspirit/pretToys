import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import './land.css'
import { useGlobal } from '../../contexts/globalContext'
import * as CategoryApis from '../../api/category'
import Loader from '../loader/Loader'

function Land() {
    const navigate = useNavigate()
    const { category, setCategory, setCurrentCategory, loader, setLoader } = useGlobal();

    useEffect(() => {
        setLoader(true)
        CategoryApis?.getCategoryList().then(res => {
            if (res) {
                setLoader(false)
                setCategory(res?.data?.categories)
            }

        })
    }, [])

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            console.log("token")
            navigate("/auth/login")
        }
    }, [localStorage.getItem("token")])

    const movetoProductlisting = async (categoryID) => {
        const res = await CategoryApis?.getSingleCategory(categoryID);
        if (res) {
            await setCurrentCategory(res?.data?.category?.categoryName);
            navigate('/products')
        }
    }

    return (
        <div>
            <div className="landing-page">
                <div className="main-content">
                    <div className="land-img-container">
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

                        {loader ? <Loader /> : (<div className="sec-wrap">
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
                        </div>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Land
