import React from "react";

import styles from './NotFound.module.css'
import notFoundImg from '../../assets/images/404.avif'

const NotFound = () => {
    return (
        <section class="container my-5 d-flex justify-content-center align-items-center">
            <img src={notFoundImg} className='w-50 ' alt="error 404" />
        </section>
    );
}

export default NotFound;