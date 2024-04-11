import React from "react";
import "./Home1.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUnlockAlt } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";

const Home1 = () => {
    return (
        <section className="home1">
            <div className="home1-container">
                <div className="speechs">
                    <div className="speech1">
                        <div class="bubble bubble-bottom-right" contenteditable>
                            <FaMagnifyingGlass />

                            <p className="speech-p">
                                Find the best answer to your technical question,
                                help others answer theirs
                            </p>

                            <a href="" className="join-button">
                                Join the community
                            </a>

                            <p className="or-speech1">
                                or
                                <a
                                    href="https://stackoverflow.com/questions"
                                    className="link-or-speech1"
                                >
                                    search content
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="speech2">
                        <div class="bubble bubble-bottom-left" contenteditable>
                            <FaUnlockAlt />

                            <p className="speech-p">
                                Want a secure, private space for your technical
                                knowledge?
                            </p>

                            <a href="" className="discover-button">
                                Discover Teams
                            </a>
                        </div>
                    </div>
                </div>

                <div className="informs">
                    <div className="inform1">
                        Every
                        <span className="colornchanger"> game developer </span>
                        has a <br /> tab open to Stack Overflow
                    </div>

                    <div className="inform-hr"></div>

                    <div className="inform2">
                        <ul className="inform2-ul">
                            <li className="inform2-li">
                                <span>100+ million monthly</span>
                                <br /> visitors to Stack <br /> Overflow & Stack
                                Exchange
                            </li>
                            <li className="inform2-li">
                                <span>45.1+ billion</span>
                                <br />
                                Times a developer got help since 2008
                            </li>
                            <li className="inform2-li">
                                <span>191% ROI</span>
                                <br />
                                from companies using Stack <br /> Overflow for
                                Teams
                            </li>
                            <li className="inform2-li">
                                <span>5,000+</span>
                                <br />
                                Stack Overflow for Teams <br /> instances active
                                every day
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="get-so">
                <div className="get-so-container">
                    <div className="forcommunity get-so-flex">
                        <img src="/img/logo.png" alt="" className="img-logo" />
                        <img
                            src="/img/illo-public.svg"
                            alt=""
                            className="img2-img"
                        />
                        <p className="get-so-p1">
                            A public platform building the definitive collection
                            of coding questions & answers
                        </p>

                        <p className="get-so-p2">
                            A community-based space to find and contribute
                            answers to technical challenges, and one of the most
                            popular websites in the world.
                        </p>

                        <a href="" className="join-button">
                            Join Community
                        </a>
                        <p className="or-content">
                            or<a href="">Search content</a>
                        </p>
                    </div>

                    <div className="forteams get-so-flex">
                        <img src="/img/logo.png" alt="" className="img-logo" />
                        <img
                            src="/img/illo-teams.svg"
                            alt=""
                            className="img2-img"
                        />
                        <p className="get-so-p1">
                            A private collaboration & knowledge sharing SaaS
                            platform for companies
                        </p>

                        <p className="get-so-p2">
                            A web-based platform to increase productivity,
                            decrease cycle times, accelerate time to market, and
                            protect institutional knowledge.
                        </p>

                        <span className="teams-gs">
                            <p className="teams-hr"></p>
                            <p>Get Started</p>
                            <p className="teams-hr"></p>
                        </span>

                        <span className="buttons-teams">
                            <p className="discover-button ">
                                <a href="" className="teams-a">
                                    For large organizations
                                </a>
                                <LuBuilding2 className="teams-icon" />
                            </p>
                            <p className="discover-button ">
                                <a href="" className="teams-a">
                                    For small teams
                                </a>
                                <IoPeople className="teams-icon" />
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home1;
