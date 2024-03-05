import React, { useContext, useEffect, useState } from "react";

import styles from './WishList.module.css'
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";


export default function WishList() {
    let { addCartWish, deleteCartWish, setNumOfCartWish, numberItemWish } = useContext(CartContext)
    const [getCart, setGetCart] = useState({})
    async function addCartProductWish() {
        let { data } = await addCartWish()
        setGetCart(data)
    }

    async function deleteWish(id) {
        let { data } = await deleteCartWish(id)
        setGetCart(data)
        setNumOfCartWish(data.count)
        addCartProductWish()
        numberItemWish()
    }

    useEffect(() => {
        addCartProductWish()
    }, [])
    return (
        <>
          <Helmet>
            <title>WishList</title>
          </Helmet>
          {getCart.data && (
            <div className="container my-5">
              <div className="mx-auto bg-main-light p-5">
                <h2 className="pb-3">WishList Cart</h2>
                {getCart.data.map((ele) => (
                  <div key={ele.id} className="row my-3 border-bottom">
                    <div className="col-md-2">
                      <img src={ele.imageCover} className="w-100 mb-4" alt="" />
                    </div>
                    <div className="col-md-10">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="left-side">
                          <h3>{ele.title}</h3>
                          <p className="text-main">price: {ele.price}</p>
                          <p className="cursor-pointer" onClick={() => deleteWish(ele.id)}>
                            <i className="fa-solid fa-trash-can"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      );
 }