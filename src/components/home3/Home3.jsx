import React from "react";
import "./Home3.css";
import { LuQuote } from "react-icons/lu";

const Home3 = () => {
    return (
        <div className="home3-container">
            <div className="home3">
                <div className="home3-part1">
                    <ul className="home3-ul">
                        <li className="home3-li">
                            <LuQuote className="home3-li-icon" />
                            <p className="teams-li-text">
                                Stack Overflow for Teams has been a resource for
                                our entire company. Not only for developers to
                                solve problems, it’s also enabled our sales
                                field to answer technical questions that help
                                them close deals.
                            </p>
                            <div className="home3-li-hr"></div>
                            <p className="teams-li-wr">
                                Director of Product Management
                            </p>
                            <p className="teams-li-brand">Microsoft</p>
                        </li>

                        <li className="home3-li">
                            <LuQuote className="home3-li-icon" />
                            <p className="teams-li-text">
                                Engineers should help solve the hardest
                                questions, the unknowns, where being familiar
                                with how the product was built is essential. But
                                we don’t want to keep answering solved problems
                                over and over again. That’s where Stack Overflow
                                for Teams really helps.
                            </p>
                            <div className="home3-li-hr"></div>
                            <p className="teams-li-wr">
                                Director of Engineering
                            </p>
                            <p className="teams-li-brand">Elastic Cloud</p>
                        </li>

                        <li className="home3-li">
                            <LuQuote className="home3-li-icon" />
                            <p className="teams-li-text">
                                As we started to use [Stack Overflow for Teams]
                                and saw how nice it was to have a repository of
                                information, we started to see it spread to
                                other teams. Our customer support team started
                                using it, our people success team started using
                                it, next thing we knew, we had [Slack]
                                integrations all over the place.
                            </p>
                            <div className="home3-li-hr"></div>
                            <p className="teams-li-wr">Engineering</p>
                            <p className="teams-li-brand">Expensify</p>
                        </li>

                        <li className="home3-li">
                            <LuQuote className="home3-li-icon" />
                            <p className="teams-li-text">
                                What we love about Stack Overflow for Teams is
                                that it’s a very dynamic tool…there’s just so
                                many ways to use this as a liaison between
                                different teams and different knowledge bases.
                            </p>
                            <div className="home3-li-hr"></div>
                            <p className="teams-li-wr">Software Engineer</p>
                            <p className="teams-li-brand">Box</p>
                        </li>
                    </ul>
                </div>

                <div className="home3-part2">
                    <img
                        src="/img/logo.png"
                        alt=""
                        className="part2-about-img"
                    />
                    <div className="part2-hr"></div>
                    <p className="part2-about-text">
                        Additional products that reach and engage developers &
                        technologists…
                    </p>

                    <div className="home3-part2-about">
                        <ul className="part2-about-ul">
                            <li className="part2-about-li">
                                <img
                                    src="/img/logo.png"
                                    alt=""
                                    className="part2-about-li-img"
                                />
                                <p className="part2-about-li-text">
                                    Reach the world’s largest audience of
                                    developers and technologists
                                </p>
                            </li>
                            <li className="part2-about-li">
                                <img
                                    src="/img/logo.png"
                                    alt=""
                                    className="part2-about-li-img"
                                />
                                <p className="part2-about-li-text">
                                    Connecting communities with the specific
                                    technologies they use the most
                                </p>
                            </li>
                            <li className="part2-about-li">
                                <img
                                    src="/img/logo.png"
                                    alt=""
                                    className="part2-about-li-img"
                                />
                                <p className="part2-about-li-text">
                                    <p class="fs-subheading mb0 wmx3 mx-auto">
                                        Build your employer brand
                                    </p>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <a href="" className="part2-about-btn">
                        About the company
                    </a>
                    <p className="part2-about-work">
                        Want to work here? Current job openings
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home3;
