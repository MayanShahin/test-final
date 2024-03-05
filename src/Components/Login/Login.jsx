import React, { useContext, useState } from "react";

import styles from './Login.module.css'
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import axios from "axios";
import { useFormik } from "formik";
import { TokenContext } from "../../Context/Token";


const Login = () => {
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    let { setToken } = useContext(TokenContext)

    async function callLogin(reqBody) {
        console.log(reqBody);

        setErrorMessage("")
        setIsLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, reqBody)
            .catch(err => {
                setIsLoading(false)
                setErrorMessage(err.response.data.message)
            })
        console.log(data);
        if (data.message == "success") {
            // login
            localStorage.setItem("userToken", data.token)
            setToken(data.token)
            navigate('/home')
        }
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('email not valid').required('email is required'),
        password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "invalid password").required("password required"),

    });

    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: callLogin

    });
    return (
        <div className="w-50 mx-auto my-5">
            <h2 className="mb-3">Login now:</h2>
            {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}
            <form onSubmit={loginForm.handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="email" className="mb-1">Email</label>
                    <input type="email" id="email" value={loginForm.values.email} name="email" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} className="form-control" />
                    {loginForm.errors.email && loginForm.touched.email ? <div className="alert alert-danger">{loginForm.errors.email}</div> : null}
                    {/* {registerForm.errors.email && <div className="error">{registerForm.errors.email}</div>} */}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input type="password" id="password" value={loginForm.values.password} name="password" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} className="form-control" />
                    {loginForm.errors.password && loginForm.touched.password ? <div className="alert alert-danger">{loginForm.errors.password}</div> : null}
                </div>
                <button type="submit" className="btn bg-main text-white d-block ms-auto mb-2">
                    {isLoading ? <i className="fa fa-spinner fa-spin"></i> : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;