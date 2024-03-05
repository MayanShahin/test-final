import React, { useState } from "react";
import { useFormik } from 'formik';
import styles from './Register.module.css';
import * as Yup from 'yup'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const Register = () => {

    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    async function callRegister(reqBody) {
        console.log(reqBody);
        setErrorMessage("")
        setIsLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, reqBody)
        //   .catch(err => setErrorMessage(err.response.data.message))
        console.log(data);
        if (data.message == "success") {
            // login
            navigate('/Login')
        }
    }

    const validationSchema = Yup.object({
        name: Yup.string().min(3, "name is too short").max(10, "name is too long").required("Name is required"),
        email: Yup.string().email('email not valid').required('email is required'),
        password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "invalid password").required("password required"),
        rePassword: Yup.string().oneOf([Yup.ref('password')], "password and rePassword should match").required("password required"),
        phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "invalid phone").required("phone required"),

    });


    // function Validate(values)  {
    //     const errors = {};
    //     if (!values.name) {
    //         errors.name = "Required";
    //     } else if (values.name.length < 3) {
    //         errors.name = "Name is too short";
    //     }

    //     if (!values.email) {
    //         errors.email = "Required";
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = "Invalid email";
    //     }

    //     if (!values.password) {
    //         errors.password = "Required"
    //     } else if (!/^[A-Z][a-z0-9]{3,5}$/.test(values.password)) {
    //         errors.password = "Invalid password"
    //     }

    //     if (!values.rePassword) {
    //         errors.rePassword = "Required"
    //     } else if (values.password !== values.rePassword) {
    //         errors.rePassword = "Passwords do not match"
    //     }

    //     if (!values.phone) {
    //         errors.phone = "Required"
    //     } else if (!/^01[0125][0-9]{8}$/.test(values.phone)) {
    //         errors.phone = "Invalid phone number"
    //     }
    //     return errors;
    // };

    const registerForm = useFormik({
        initialValues: {
            name: "Nour",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },
        validationSchema: validationSchema,
        onSubmit: callRegister

    });

    return (
        <>
        <Helmet>
                <title>Register Page</title>
        </Helmet>

        <div className="w-50 mx-auto my-5">
            <h2 className="mb-3">Register now:</h2>
            {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}
            <form onSubmit={registerForm.handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="fullName" className="mb-1">Full Name</label>
                    <input type="text" id="fullName" value={registerForm.values.name} name="name" onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} className="form-control" />
                    {registerForm.errors.name && registerForm.touched.name ? <div className="alert alert-danger">{registerForm.errors.name} </div> : null}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="email" className="mb-1">Email</label>
                    <input type="email" id="email" value={registerForm.values.email} name="email" onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} className="form-control" />
                    {registerForm.errors.email && registerForm.touched.email ? <div className="alert alert-danger">{registerForm.errors.email}</div> : null}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input type="password" id="password" value={registerForm.values.password} name="password" onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} className="form-control" />
                    {registerForm.errors.password && registerForm.touched.password ? <div className="alert alert-danger">{registerForm.errors.password}</div> : null}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="rePassword" className="mb-1">Confirm Password</label>
                    <input type="password" id="rePassword" value={registerForm.values.rePassword} name="rePassword" onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} className="form-control" />
                    {registerForm.errors.rePassword && registerForm.touched.rePassword ? <div className="alert alert-danger">{registerForm.errors.rePassword}</div> : null}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="phone" className="mb-1">Phone</label>
                    <input type="tel" id="phone" value={registerForm.values.phone} name="phone" onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} className="form-control" />
                    {registerForm.errors.phone && registerForm.touched.phone ? <div className="alert alert-danger">{registerForm.errors.phone}</div> : null}
                </div>
                <button type="submit" className="btn bg-main text-white d-block ms-auto mb-2" disabled={!(registerForm.isValid && registerForm.dirty)}>
                    {isLoading ? <i className="fa fa-spinner fa-spin"></i> : "Register"}
                </button>
                {console.log(registerForm)}

            </form>
        </div>
        </>
    );
};


export default Register;