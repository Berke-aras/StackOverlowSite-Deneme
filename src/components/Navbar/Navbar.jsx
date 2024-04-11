import React from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo-container">
                <TfiAlignJustify className="nav-menu" />
                <Link className="nav-logo" to={`/`}>
                    <img src="/img/logo.png" alt="" />
                </Link>
            </div>

            <div className="nav-links">
                <ul>
                    <li>
                        <a href="#" className="link-n">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link link-n">
                            For Teams
                        </a>
                    </li>
                </ul>
            </div>

            <div className="nav-search">
                <div className="nav-search-icon">
                    <FaMagnifyingGlass className="nav-search-icon-inner" />
                </div>
                <input
                    type="text"
                    placeholder="Search.."
                    className="nav-search-input"
                />
            </div>

            <div className="nav-log-in-up">
                <Link className="nav-login" to={`/login`}>
                    Login
                </Link>
                <Link className="nav-sign-up" to={`/signup`}>
                    SignUp
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
