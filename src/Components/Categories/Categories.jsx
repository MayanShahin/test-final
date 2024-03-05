import React, { useEffect, useState } from "react";

import styles from './Categories.module.css'
import { Helmet } from "react-helmet";
import axios from "axios";
import Loader from "../Loader/Loader";

const Categories = () => {

    const [allCategories, setAllCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    async function getCategories() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        console.log(allCategories);
        setAllCategories(data.data)
        setIsLoading(false)

    }

    useEffect(() => {
        getCategories()
    }, [])


    return (
        <>
        <Helmet>
         <title>Categories</title>
        </Helmet>

         <div className="container py-5">
            {isLoading? <Loader/> : null}
                <div className="row g-4">
                    {allCategories?.map(data => <div className="col-md-4">
                        <div className="card border ">
                        <img src={data.image} className="card-img-top" width= "100%" height={300} alt="" />
                        <div className="card-body">
                        <h5 className="card-title text-main text-center">{data.name}</h5>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Categories;