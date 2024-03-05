import React, { useEffect, useState } from "react";

import styles from './Cart.module.css'
import { Helmet } from "react-helmet";
import axios from "axios";

// const [allCarts, setAllCarts] = useState([])
// const [isLoading, setIsLoading] = useState(true)


//     let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/6407f1bcb575d3b90bf95797?url=http://localhost:3000`)
//     // setBrands(data.data);
//     setAllCarts(data.data)
//     setIsLoading(false)

// useEffect(() => {
//     getCarts()
// }, [])


const Cart = (props) => {
    return (
        <>
        {/* <h2>
             Cart
             {props.children}
        </h2> */}
        <div className="container py-5">
            <div className="bg-light my-5 px-5">
                <h2 className="py-3">Cart Shop</h2>
                 <h2 className="pb-5 ">your cart is empty</h2> 
                {/* <p className="text-main">Total Price:{totalCartPrice} EGP</p>
                <Helmet>
                  <title>Cart</title>
                </Helmet>
                {product.map((product) => (
                    <div className="row align-items-center border-bottom p-2" key={product.id}>
                        <div className="col-md-2">
                            <img src={product.product.imageCover} className="w-100" alt={product.product.title} />
                        </div>
                    </div>
                ))
                } */}
            </div>
        </div>
        </>
    );
}

export default Cart;