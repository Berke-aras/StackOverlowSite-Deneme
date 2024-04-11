import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-container">
                <img src="/img/icon.png" alt="" className="footer-logo" />
                <div>
                    <p className="footer-title">Stack Overflow</p>
                    <ul className="list-style">
                        <li>Questions</li>
                        <li>Help</li>
                    </ul>
                </div>

                <div>
                    <p className="footer-title">Products</p>
                    <ul className="list-style">
                        <li>Teams</li>
                        <li>Advertising</li>
                        <li>Collectives</li>
                        <li>Talent</li>
                    </ul>
                </div>

                <div className="footer-div2">
                    <div>
                        <p className="footer-title">Company</p>
                        <ul className="list-style">
                            <li>About</li>
                            <li>Press</li>
                            <li>Work Here</li>
                            <li>Legal</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Contact Us</li>
                            <li>Cookie Settings</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>

                    <div>
                        <p className="footer-title">Stack Exchange Network</p>
                        <ul className="list-style">
                            <li>Texhnology</li>
                            <li>Culture & recration</li>
                            <li>Life & arts</li>
                            <li>Science</li>
                            <li>Professional</li>
                            <li>Business</li>
                            <li>API</li>
                            <li>Data</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-div3">
                    <ul className="footer-div3-ul list-style">
                        <li>Blog</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                    </ul>

                    <p className="list-style list-stylep">
                        Site design / logo © 2024 Stack Exchange Inc; user
                        contributions licensed under CC BY-SA. rev 2024.4.8.7402
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
