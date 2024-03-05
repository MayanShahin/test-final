import React from "react";

import styles from './Layout.module.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <>
             <NavBar />

                 <Outlet />
                 <Toaster/>

             <Footer />
         </>
    );
}

export default Layout;

