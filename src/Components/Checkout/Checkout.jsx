import React, { useContext } from 'react';
// import styles from './Checkout.module.css';
import { useFormik } from 'formik';
import { CartContext } from '../../Context/CartContext';
// 
export default function Checkout() {


  const { payment } = useContext(CartContext)

  async function checkoutPayment(values) {
    const { data } = await payment(values)
    window.location.href = data.session.url

  }

  let formik = useFormik({
    initialValues: {
      details: '',
      city: '',
      phone: ''
    },
    onSubmit: checkoutPayment
  })

  return (
    <>
      <div className="container p-4 bg-main-light">
        <h2>CheckOut :</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label for="" className='form-label'>Details :</label>
            <input type='text' name='details' id='details' className='form-control' value={formik.values.details} onChange={formik.handleChange} />
          </div>

          <div className="mb-3">
            <label for="" className='form-label'>City :</label>
            <input type='text' name='city' id='city' className='form-control' value={formik.values.city} onChange={formik.handleChange} />
          </div>

          <div className="mb-3">
            <label for="" className='form-label'>Phone :</label>
            <input type='text' name='phone' id='phone' className='form-control' value={formik.values.phone} onChange={formik.handleChange} />
          </div>
          <button className='btn bg-main' type='submit'>Pay</button>
        </form>
      </div>
    </>
  );
}
