import React, { useContext, useEffect, useState } from "react";
import styles from './Details.module.css'
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../Loader/Loader";
import Slider from "react-slick";
import CartContextProvider from "../../Context/CartContext";
import CartContext from "../../Context/CartContext";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function Details() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    const [details, setDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // let { addToCart } = useContext(CartContext);


    // function getProductsDetails(id) {
    //     return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    // }

    const {id} = useParams()

    async function getProductsDetails() {
        //return
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        console.log(data);

        // setDetails(data.data)
        // setIsLoading(false)

    }
    

    async function addCart(id) {
        // let res = await addToCart(id)
        // if (res.data.status == "success") {
        //     toast('product added successfully')
        // } else {
        //     toast.error('failed to add product')
        // }
    };


    useEffect(() => {
        getProductsDetails()
    }, [])
    // let { data, isError, isLoading } = useQuery("details", () => getProductsDetails(params.id))
    // console.log(data);
    return (
        <>
            <div className="container">
                {isLoading ? <Loader /> : null}
                {<div className="row align-items-center">
                    <div className="col-md-4">
                        <Slider {...settings}>
                            {details.images?.map((details, index => <img key={index} src={details} className="w-100" alt="" />))}
                        </Slider>

                    </div>
                    <div className="col-md-8">
                        <h2>{details.title}</h2>
                        <p>{details.description}</p>
                        <p>{details.name}</p>
                        <div className="d-flex justify-content-between">
                            <h5>{details.price}EGP</h5>
                            <h5><i className="fa fa-star rating-color"></i> {details.ratingsAverage}</h5>
                        </div>
                        {/* <CartContextProvider> */}
                        <button onClick={() => addCart(details.id)} className="btn bg-main w-100 text-white">Add to cart</button>
                        {/* </CartContextProvider> */}
                    </div>
                </div>}
            </div>
        </>
    );
}

