import React, { useEffect, useState } from "react";
import styles from './Products.module.css'
import { Helmet } from "react-helmet";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Products = () => {

    const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    async function getProducts() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        console.log(allProducts);
        setAllProducts(data.data)
        setIsLoading(false)

    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>

            <div className="container py-5">
                {/* <Loader isLoading = {isLoading} /> */}
                {isLoading ? <Loader /> : null}
                <h2>Featured Products</h2>
                <div className="row">
                    {/* <button onClick={refetch}>Refetch</button> */}
                    {allProducts.map((ele) => <div className="col-md-3" height="200">
                        <div className="product cursor-pointer py-3 px-2 overflow-hidden">
                            <Link to={`/details/${ele.id}`}> 
                                <img src={ele.imageCover} className="w-100" alt={ele.title} />
                                <p className="text-main font-sm fw-bolder">{ele.category.name}</p>
                                <h3 className="h6">{ele.title.split(" ").slice(0, 3).join(" ")}</h3>
                                <div className="d-flex justify-content-between mt-3">
                                    <p>{ele.price} EGP</p>
                                    <span><i className="fas fa-star rating-color"></i>{ele.ratingsAverage}</span>
                                    {/* <p>{ele.id}</p> */}
                                </div>
                            </Link>
                            <button  className="btn bg-main text-white w-100">+ Add</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Products;