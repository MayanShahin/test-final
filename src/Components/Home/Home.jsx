import React from "react";

import styles from './Home.module.css'
import Cart from "../Cart/Cart";
import Categories from "../Categories/Categories";
import { Helmet } from "react-helmet";
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Home = () => {
    return (
        <>
        <Helmet>
                <title>Home Page</title>
        </Helmet>
        <MainSlider/>
        <CategoriesSlider/>
        <FeaturedProducts/>
        </>
    );
}

export default Home;