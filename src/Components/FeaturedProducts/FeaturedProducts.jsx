import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styles from './FeaturedProducts.module.css'
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
// import Details from "../Details/Details";
// import CartContextProvider from "../../Context/CartContext";
import toast from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


export default function FeaturedProducts() {
    // let {addToCart} = useContext(CartContext)
    const {addToCart} = useContext(CartContext)

    const [allProducts, setAllProducts, getFeaturedProducts] = useState([])
    const { isError, data, isFetching, refetch } = useQuery('featureProducts', getFeaturedProducts)
    const [isLoading, setIsLoading] = useState(true)
    console.log(data?.data.data);


    async function getAllProducts() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        // console.log(data);
        setAllProducts(data.data)
        setIsLoading(false)
    }

    // let {data, isLoading, isFetching} = useQuery("FeaturedProducts", getFeaturedProducts, {
    //   cacheTime:3000,
    //   enabled:false
    // })


    useEffect(() => {
        getAllProducts()
    }, [])


    async function addCart(id) {
        console.log('sending');
        let res = await addToCart(id)
        console.log(res);
        console.log('done');
        // if(res.data.status == "success"){
        //     toast('product added successfully')
        // }else{
        //     toast.error('failed to add product')
        // }
    };

    return (
        <>
            <div className="container py-5">
                {/* <Loader isLoading = {isLoading} /> */}
                {isLoading ? <Loader /> : null}
                <h2>Featured Products</h2>
                <div className="row">
                    {/* <button onClick={refetch}>Refetch</button> */}
                    {allProducts.map((ele) => <div className="col-md-2" height="200">
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
                                <i class="fa-solid fa-heart fw-2 heart cursor-pointer"></i>

                            </Link>
                            <button onClick={() => addCart(ele.id)} className="btn bg-main text-white w-100">Add to cart</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </>
    );
}

