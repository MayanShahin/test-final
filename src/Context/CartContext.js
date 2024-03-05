import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext();

export default function CartContextProvider({ children }) {



    function payment() {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/6407f1bcb575d3b90bf95797?url=http://localhost:3000`)
            .then((response) => response)
            .catch((error) => error)

    }




    let headers = {
        token: localStorage.getItem("userToken")
    }

    function addToCart(id) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId: id


        }, {
            headers
        }).then((res) => res).catch((err) => err)
    }



    return <CartContext.Provider value={{ addToCart, payment }}>
        {children}
    </CartContext.Provider>
}

