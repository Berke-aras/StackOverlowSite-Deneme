import React, { useState } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";

import firebase, { login } from "../../Firebase";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = await login(email, password);
        console.log(user);
    };
    return (
        <>
            <Navbar />
            <Toaster />
            <div className="login">
                <div className="login-container">
                    <div className="login-logo">
                        <svg
                            aria-hidden="true"
                            class="native svg-icon iconLogoGlyphMd"
                            width="32"
                            height="37"
                            viewBox="0 0 32 37"
                        >
                            <path
                                d="M26 33v-9h4v13H0V24h4v9h22Z"
                                fill="#BCBBBB"
                            ></path>
                            <path
                                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                                fill="#F48024"
                            ></path>
                        </svg>
                    </div>

                    <a href="" className="link-login google">
                        <FaGoogle className="link-login-icon google-icon" />
                        Log in with Google
                    </a>
                    <a href="" className="link-login github">
                        <FaGithub className="link-login-icon github-icon" />
                        Log in with GitHub
                    </a>
                    <a href="" className="link-login facebook">
                        <FaSquareFacebook className="link-login-icon facebook-icon" />
                        Log in with Facebook
                    </a>

                    <div className="login-form">
                        <form className="form" onSubmit={handleSubmit}>
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                className="login-input"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <div className="forgot">
                                <label htmlFor="">Password</label>
                                <a href="">Forgot Password ?</a>
                            </div>
                            <input
                                type="password"
                                className="login-input"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input
                                type="submit"
                                value="Login"
                                className="submit"
                                disabled={!email || !password}
                            />

                            <div className="login-hr"></div>
                        </form>
                    </div>

                    <p className="login-texts">
                        Don’t have an account? <a href=""> Sign up </a>
                    </p>

                    <p className="login-texts">
                        Are you an employer? <a href=""> Sign up on Talent </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
