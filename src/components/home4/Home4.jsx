import React from "react";
import "./Home4.css";
import { IoIosLock } from "react-icons/io";

const Home4 = () => {
    return (
        <div className="home4">
            <div className="home4-container">
                <div className="home4-content">
                    <img
                        src="/img/stack-logo-black.png"
                        alt=""
                        className="home4-logo"
                    />
                    <p className="home4-title">
                        Explore technical topics and other disciplines across
                        170+ Q&A communities
                    </p>
                    <p className="home4-text">
                        From Server Fault to Super User, much of the Stack
                        Exchange network continues our mission to empower the
                        world to develop technology through collective
                        knowledge. Other sites on the Stack Exchange network
                        further encourage knowledge sharing across topics such
                        as cooking and medicine.
                    </p>
                    <a href="" className="home4-btn">
                        Explore the network
                    </a>
                </div>
            </div>

            <div className="home4-container2">
                <IoIosLock className="home4c2-icon" />
                <p className="home4c2-text">
                    Build a <strong> private community </strong> to share
                    technical or non-technical knowledge.
                </p>
                <a href="" className="home4c2-btn">
                    Create a free Team
                </a>
            </div>
        </div>
    );
};

export default Home4;
