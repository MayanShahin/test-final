import React, { useContext } from "react";

import styles from './NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/product-icon.webp'
import { CounterContext } from "../../Context/Counter";
import { TokenContext } from "../../Context/Token";


const NavBar = () => {
    let { Counter } = useContext(CounterContext)
    // console.log(Counter );
    let { token, setToken } = useContext(TokenContext)
    let navigate = useNavigate()
    // console.log(counter);

    function LogOut() {
        localStorage.removeItem("userToken")
        setToken(null);
        navigate("/login")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to='home'>
                        <img src={logo} class="logo w-25" alt="logo" />
                        Freshcart
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {token ?
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='home'>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='cart'>
                                        Cart
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='wish list'>
                                        Wish list
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='products'>
                                        Product
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='categories'>
                                        Categories
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='brands'>
                                        Brands
                                    </Link>
                                </li>


                            </ul>
                            : null}

                        <ul className="ms-auto navbar-nav">

                            <li className="nav-item align-self-center">
                                <i className="fa-brands mx-1 fa-instagram"></i>
                                <i className="fa-brands mx-1 fa-facebook"></i>
                                <i className="fa-brands mx-1 fa-linkedin"></i>
                                <i className="fa-brands mx-1 fa-twitter"></i>

                            </li>

                            {token ?
                            <li className="nav-item">
                                <button className="nav-link " onClick={LogOut} >
                                    Logout
                                </button>

                            </li> : <>      <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='register'>
                                    Register
                                </Link>
                            </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='login'>
                                        Login
                                    </Link>
                                </li>
                            </>
                             } 
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;



