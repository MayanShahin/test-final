import React from 'react'
import styles from './MainSlider.module.css'
import Slider from 'react-slick';
import img1 from '../../assets/images/slider-img1.jpg'
import img2 from '../../assets/images/slider-img2.jpg'
import img3 from '../../assets/images/slider-img-3.jpg'



const MainSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <>
      <div className="container my-5">
        <div className="row gx-0">
          <div className="col-md-8">
            <Slider {...settings}>
              <img src={img3} className='w-100'height={400} alt="" />
              <img src={img1} className='w-100'height={400} alt="" />
              <img src={img2} className='w-100'height={400} alt="" />
            </Slider>
          </div>

          <div className="col-md-4">
            <img src={img2} className="w-100" height={200} alt="" />
            <img src={img1} className="w-100" height={200} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSlider;